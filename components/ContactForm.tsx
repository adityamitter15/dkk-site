"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import TrackedOutbound from "@/components/TrackedOutbound";
import { trackOutbound } from "@/lib/track";
import { site } from "@/data/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const FORMSPREE_ID = "xeedpgvk";
const COOLDOWN_MS = 60_000;
const MIN_RENDER_MS = 2_500;
const STORAGE_KEY = "dkk_contact_last_submit";
const MAX_NAME = 80;
const MAX_MESSAGE = 2000;
const CLUB_WHATSAPP = "https://wa.me/447976411901";

/**
 * The club does not publish a phone number, so a call has to be requested
 * rather than dialled. That only works if it is offered as a real choice with
 * a time attached, not as an optional box below the message: someone who wants
 * to speak to a person needs to see that they can, and be told they will be.
 *
 * WhatsApp works the other way round on purpose. Collecting a number and
 * emailing it over meant Sensei had to start a chat with a stranger, which
 * WhatsApp makes awkward without saving a contact first. So picking WhatsApp
 * opens the visitor's own WhatsApp with the message already written, they
 * press send, and it lands in the club chat like any other message he can
 * simply reply to. Those enquiries do not go through Formspree at all.
 */
const REPLY_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone call" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

type ReplyBy = (typeof REPLY_OPTIONS)[number]["value"];

const EXPERIENCE_OPTIONS = [
  { value: "none", label: "Complete beginner - no martial arts experience" },
  { value: "other", label: "Experienced in another martial art" },
  { value: "karate", label: "Karate background" },
  { value: "goju", label: "Goju Ryu background" },
  { value: "advanced", label: "Advanced / Black belt level" },
] as const;

/** The lines of the enquiry, shared between the WhatsApp and email fallback links. */
function enquiryText(name: string, experience: string, message: string): string {
  const level = EXPERIENCE_OPTIONS.find((o) => o.value === experience)?.label;
  const lines = [`Hi, I'm ${name}. I'm getting in touch through the DKK website.`];
  if (level) lines.push(`Experience: ${level}`);
  lines.push("", message || "I'd like to find out more about training.");
  return lines.join("\n");
}

/** The text the visitor sends from their own WhatsApp when they pick that option. */
function whatsappLink(name: string, experience: string, message: string): string {
  return `${CLUB_WHATSAPP}?text=${encodeURIComponent(enquiryText(name, experience, message))}`;
}

/**
 * Sends a copy of the enquiry to a private club Google Sheet, independent of
 * Formspree. Formspree's free plan deletes submissions after 30 days, and its
 * spam filter can drop a message with no email sent at all, which has already
 * lost a real enquiry once. This is fire-and-forget: it must never throw,
 * never delay the UI, and never change what the visitor sees.
 */
function saveEnquiryCopy(fields: FormData, formspreeResult: string) {
  try {
    const payload = {
      name: String(fields.get("name") ?? ""),
      email: String(fields.get("email") ?? ""),
      phone: String(fields.get("phone") ?? ""),
      replyBy: String(fields.get("replyBy") ?? ""),
      callTime: String(fields.get("callTime") ?? ""),
      experience: String(fields.get("experience") ?? ""),
      message: String(fields.get("message") ?? ""),
      page: window.location.pathname,
      formspree: formspreeResult,
    };
    const url = site.enquirySheetEndpoint;
    const body = JSON.stringify(payload);
    let sent = false;
    try {
      sent =
        typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function"
          ? navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=UTF-8" }))
          : false;
    } catch {
      sent = false;
    }
    if (!sent) {
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body,
      }).catch(() => {});
    }
  } catch {
    /* the backup copy must never affect the visitor's experience */
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldownLeft, setCooldownLeft] = useState(0);
  const [messageLen, setMessageLen] = useState(0);
  const [replyBy, setReplyBy] = useState<ReplyBy>("email");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(undefined);
  const [handoff, setHandoff] = useState<{ whatsapp: string; email: string } | null>(null);
  const renderedAt = useRef<number>(Date.now());
  const panelHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    renderedAt.current = Date.now();
    if (typeof window === "undefined") return;
    try {
      const last = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0);
      const remaining = Math.max(0, last + COOLDOWN_MS - Date.now());
      if (remaining > 0) setCooldownLeft(remaining);
    } catch {
      /* localStorage blocked - ignore */
    }
  }, []);

  useEffect(() => {
    if (cooldownLeft <= 0) return;
    const id = window.setInterval(() => {
      setCooldownLeft((prev) => Math.max(0, prev - 1000));
    }, 1000);
    return () => window.clearInterval(id);
  }, [cooldownLeft]);

  /**
   * Moves focus to the result panel's heading once it appears. This has to be
   * an effect rather than a call inside handleSubmit: the WhatsApp branch
   * opens a new tab synchronously, and grabbing focus back on this tab right
   * after would fight the browser for it.
   */
  useEffect(() => {
    if (handoff || submitted) panelHeading.current?.focus({ preventScroll: true });
  }, [handoff, submitted]);

  /**
   * Records the send as a virtual /contact/sent view via trackOutbound.
   *
   * Cloudflare's beacon has no custom-event API, so a brief virtual navigation
   * to /contact/sent is what makes a form-submission count show up in Web
   * Analytics. trackOutbound restores the real URL a moment later, so the
   * panel below stays put and nothing about the flow changes for the person
   * who just wrote to us. /contact/sent is still a real route, so a refresh
   * or a shared link still lands on something.
   */
  function markSent() {
    setSubmitted(true);
    trackOutbound("/contact/sent");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (cooldownLeft > 0) {
      setError(`Please wait ${Math.ceil(cooldownLeft / 1000)}s before sending another message.`);
      return;
    }

    if (Date.now() - renderedAt.current < MIN_RENDER_MS) {
      setError("That was too quick. Please try again.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_gotcha") as string)?.length || (data.get("website") as string)?.length) {
      setLockedHeight(form.getBoundingClientRect().height);
      setSubmitted(true);
      return;
    }

    const message = String(data.get("message") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    if (name.length > MAX_NAME) {
      setError("Name is too long.");
      return;
    }
    if (message.length > MAX_MESSAGE) {
      setError("Message is too long. Please keep it under 2000 characters.");
      return;
    }

    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const invalid: { name?: string; email?: string; phone?: string } = {};
    if (!name) {
      invalid.name = "Please add your name.";
    }
    if (replyBy === "email" && !email) {
      invalid.email = "Please add your email, or pick Phone call or WhatsApp.";
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      invalid.email = "Please check your email address.";
    }
    if (replyBy === "phone" && phone.replace(/\D/g, "").length < 7) {
      invalid.phone = "Please add a number so we can call you, or switch back to email.";
    }
    if (Object.keys(invalid).length > 0) {
      flushSync(() => setFieldErrors(invalid));
      const firstInvalid = invalid.name ? "name" : invalid.email ? "email" : "phone";
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setFieldErrors({});

    if (replyBy === "whatsapp") {
      // Opened synchronously inside the submit event, before any await, so the
      // browser treats it as the visitor's own tap and does not block it.
      const experience = String(data.get("experience") ?? "");
      const url = whatsappLink(name, experience, message);
      const win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url;
      trackOutbound("/go/whatsapp");
      saveEnquiryCopy(data, "Opened in WhatsApp, not emailed");
      setLockedHeight(form.getBoundingClientRect().height);
      const text = enquiryText(name, experience, message);
      const email = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry from the website")}&body=${encodeURIComponent(text)}`;
      setHandoff({ whatsapp: url, email });
      return;
    }

    if (!email) data.delete("email");
    if (!message) data.set("message", "(No message left)");

    setLoading(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        try {
          window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {
          /* ignore */
        }
        saveEnquiryCopy(data, "ok");
        setLockedHeight(form.getBoundingClientRect().height);
        markSent();
      } else {
        saveEnquiryCopy(data, `error ${res.status}`);
        const json = await res.json().catch(() => ({}));
        const field = json?.errors?.[0]?.field as string | undefined;
        if (field === "name" || field === "email" || field === "phone") {
          const fieldCopy: Record<"name" | "email" | "phone", string> = {
            name: "Please add your name.",
            email: "Please check your email address.",
            phone: "Please check your number.",
          };
          flushSync(() => setFieldErrors((prev) => ({ ...prev, [field]: fieldCopy[field] })));
          document.getElementById(field)?.focus();
        } else {
          setError("That did not send. Please try again, or message us on WhatsApp.");
        }
      }
    } catch {
      saveEnquiryCopy(data, "network error");
      setError("Unable to send message. Please email info@goju-karate.co.uk directly.");
    } finally {
      setLoading(false);
    }
  }

  if (handoff) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={lockedHeight ? { minHeight: lockedHeight } : undefined}
        className="flex flex-col items-center justify-center p-10 bg-card border border-whatsapp/30 rounded-sm text-center h-full min-h-[400px]"
      >
        <WhatsAppIcon size={40} className="text-whatsapp mb-4" />
        <h3
          ref={panelHeading}
          tabIndex={-1}
          className="font-display text-2xl tracking-wide text-white mb-2 focus:outline-none"
        >
          Press Send in WhatsApp
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">
          Your message is written and waiting in WhatsApp. Press send there and it comes straight
          to us, and we will reply in the same chat. If WhatsApp did not open,{" "}
          <TrackedOutbound
            href={handoff.whatsapp}
            track="/go/whatsapp"
            className="text-gold hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            open it here
          </TrackedOutbound>
          . No WhatsApp?{" "}
          <TrackedOutbound
            href={handoff.email}
            track="/go/email"
            className="text-gold hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            Email it to us instead
          </TrackedOutbound>
          .
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={lockedHeight ? { minHeight: lockedHeight } : undefined}
        className="flex flex-col items-center justify-center p-10 bg-card border border-brand/30 rounded-sm text-center h-full min-h-[400px]"
      >
        <CheckCircle className="text-brand mb-4" size={40} aria-hidden="true" />
        <h3
          ref={panelHeading}
          tabIndex={-1}
          className="font-display text-2xl tracking-wide text-white mb-2 focus:outline-none"
        >
          Message Sent
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">
          {replyBy === "phone"
            ? "Thanks. We have your number and someone will call you back at the time you picked. "
            : "Thanks for getting in touch. We aim to reply within 48 hours. "}
          If it&apos;s urgent,{" "}
          <TrackedOutbound
            href={CLUB_WHATSAPP}
            track="/go/whatsapp"
            className="text-gold hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            message us on WhatsApp
          </TrackedOutbound>
          .
        </p>
      </div>
    );
  }

  const disabled = loading || cooldownLeft > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="name">
            Name <span className="text-brand" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={MAX_NAME}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            onChange={() => fieldErrors.name && setFieldErrors((prev) => ({ ...prev, name: undefined }))}
            className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors placeholder:text-gray-400 aria-invalid:border-red-400"
            placeholder="Your full name"
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="email">
            Email{" "}
            {replyBy === "email" ? (
              <>
                <span className="text-brand" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </>
            ) : (
              <span className="text-gray-500">(optional)</span>
            )}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required={replyBy === "email"}
            maxLength={120}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            onChange={() => fieldErrors.email && setFieldErrors((prev) => ({ ...prev, email: undefined }))}
            className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors placeholder:text-gray-400 aria-invalid:border-red-400"
            placeholder="your@email.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <fieldset id="callback" className="scroll-mt-[calc(7rem_+_var(--notice-h,0px))] border border-white/10 rounded-sm bg-card/40 px-5 pt-4 pb-5">
        <legend className="px-2 text-gray-400 text-xs uppercase tracking-widest">
          How should we get back to you?
        </legend>

        <div className="grid grid-cols-3 gap-2">
          {REPLY_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="relative cursor-pointer text-center rounded-sm border border-white/10 bg-card px-2 py-2.5 text-sm text-gray-400 transition-colors hover:border-white/25 has-[:checked]:border-brand has-[:checked]:bg-brand/10 has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/50"
            >
              <input
                type="radio"
                name="replyBy"
                value={opt.value}
                checked={replyBy === opt.value}
                onChange={() => setReplyBy(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>

        {replyBy === "phone" && (
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="phone">
                Your number <span className="text-brand" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={32}
                aria-invalid={fieldErrors.phone ? true : undefined}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                onChange={() => fieldErrors.phone && setFieldErrors((prev) => ({ ...prev, phone: undefined }))}
                className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors placeholder:text-gray-400 aria-invalid:border-red-400"
                placeholder="07700 900123"
              />
              {fieldErrors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                  {fieldErrors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="callTime">
                Best time to call
              </label>
              <select
                id="callTime"
                name="callTime"
                defaultValue="Any time"
                className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors placeholder:text-gray-400"
              >
                <option>Any time</option>
                <option>Daytime, 9am to 5pm</option>
                <option>Evenings, after 6pm</option>
                <option>Weekends</option>
              </select>
            </div>
          </div>
        )}

        <p className="text-gray-500 text-xs mt-4 leading-relaxed">
          {replyBy === "phone"
            ? "We will ring you at the time you pick. Your number is only used to return this enquiry."
            : replyBy === "whatsapp"
              ? "The button opens WhatsApp with your message ready. Press send there and it comes straight to us, and we reply in the same chat."
              : "We reply to most enquiries within 48 hours. Pick a phone call if you would rather speak to someone."}
        </p>
      </fieldset>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="experience">
          Experience Level
        </label>
        <select
          id="experience"
          name="experience"
          className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors appearance-none"
        >
          <option value="">Select your experience</option>
          {EXPERIENCE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <label className="block text-gray-400 text-xs uppercase tracking-widest" htmlFor="message">
            Message <span className="text-gray-500">(optional)</span>
          </label>
          <span
            className={`text-[10px] tabular-nums ${
              messageLen > MAX_MESSAGE * 0.9 ? "text-brand" : "text-gray-400"
            }`}
            aria-live="polite"
          >
            {messageLen}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={MAX_MESSAGE}
          onChange={(e) => setMessageLen(e.target.value.length)}
          className="w-full bg-card border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/40 transition-colors placeholder:text-gray-400 resize-none"
          placeholder="Tell us a bit about yourself and what you're looking for..."
        />
      </div>

      {/* Honeypot fields - bots fill these, humans don't see them */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p role="alert" className="text-brand text-xs">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className={`w-full sm:w-auto px-8 py-4 font-semibold uppercase tracking-wider text-sm transition-colors rounded-sm flex ${
          replyBy === "whatsapp" ? "bg-whatsapp text-night hover:brightness-110" : "bg-brand text-white hover:bg-brand-hover"
        } items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night`}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : cooldownLeft > 0 ? (
          <>Wait {Math.ceil(cooldownLeft / 1000)}s</>
        ) : replyBy === "whatsapp" ? (
          <>
            Send on WhatsApp <WhatsAppIcon size={16} />
            <span className="sr-only">(opens WhatsApp)</span>
          </>
        ) : (
          <>
            Send Message <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs leading-relaxed">
        We aim to respond within 48 hours. Your details are never shared with third parties. See our{" "}
        <Link
          href="/privacy"
          className="text-gray-400 underline-offset-2 hover:text-gold hover:underline transition-colors"
        >
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
