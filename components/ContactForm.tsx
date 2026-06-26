"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_ID = "xeedpgvk";
const COOLDOWN_MS = 60_000;
const MIN_RENDER_MS = 2_500;
const STORAGE_KEY = "dkk_contact_last_submit";
const MAX_NAME = 80;
const MAX_MESSAGE = 2000;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldownLeft, setCooldownLeft] = useState(0);
  const [messageLen, setMessageLen] = useState(0);
  const renderedAt = useRef<number>(Date.now());

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (cooldownLeft > 0) {
      setError(`Please wait ${Math.ceil(cooldownLeft / 1000)}s before sending another message.`);
      return;
    }

    if (Date.now() - renderedAt.current < MIN_RENDER_MS) {
      setError("That was too quick — please try again.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_gotcha") as string)?.length || (data.get("website") as string)?.length) {
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
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setError(
          json?.errors?.[0]?.message ??
            "Something went wrong. Please try again or email us directly.",
        );
      }
    } catch {
      setError("Unable to send message. Please email info@goju-karate.co.uk directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center p-10 bg-[#141311] border border-[#a8201a]/30 rounded-sm text-center h-full min-h-[400px]"
      >
        <CheckCircle className="text-[#a8201a] mb-4" size={40} aria-hidden="true" />
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2">Message Sent</h3>
        <p className="text-gray-400 text-sm max-w-sm">
          Thanks for getting in touch. We aim to reply within 48 hours. If it&apos;s urgent,
          WhatsApp Shihan on{" "}
          <a
            href="https://wa.me/447976411901"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a96e] hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            07976 411 901
          </a>
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
            Name <span className="text-[#a8201a]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={MAX_NAME}
            className="w-full bg-[#141311] border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-[#a8201a] focus-visible:ring-2 focus-visible:ring-[#a8201a]/40 transition-colors placeholder:text-gray-600"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="email">
            Email <span className="text-[#a8201a]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={120}
            className="w-full bg-[#141311] border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-[#a8201a] focus-visible:ring-2 focus-visible:ring-[#a8201a]/40 transition-colors placeholder:text-gray-600"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="experience">
          Experience Level
        </label>
        <select
          id="experience"
          name="experience"
          className="w-full bg-[#141311] border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-[#a8201a] focus-visible:ring-2 focus-visible:ring-[#a8201a]/40 transition-colors appearance-none"
        >
          <option value="">Select your experience</option>
          <option value="none">Complete beginner - no martial arts experience</option>
          <option value="other">Experienced in another martial art</option>
          <option value="karate">Karate background</option>
          <option value="goju">Goju Ryu background</option>
          <option value="advanced">Advanced / Black belt level</option>
        </select>
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <label className="block text-gray-400 text-xs uppercase tracking-widest" htmlFor="message">
            Message <span className="text-[#a8201a]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <span
            className={`text-[10px] tabular-nums ${
              messageLen > MAX_MESSAGE * 0.9 ? "text-[#a8201a]" : "text-gray-600"
            }`}
            aria-live="polite"
          >
            {messageLen}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          onChange={(e) => setMessageLen(e.target.value.length)}
          className="w-full bg-[#141311] border border-white/10 text-white px-4 py-3 text-base rounded-sm focus:outline-none focus-visible:border-[#a8201a] focus-visible:ring-2 focus-visible:ring-[#a8201a]/40 transition-colors placeholder:text-gray-600 resize-none"
          placeholder="Tell us a bit about yourself and what you're looking for..."
        />
      </div>

      {/* Honeypot fields — bots fill these, humans don't see them */}
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
        <p role="alert" className="text-[#a8201a] text-xs">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="w-full sm:w-auto px-8 py-4 bg-[#a8201a] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#c62828] transition-colors rounded-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c]"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : cooldownLeft > 0 ? (
          <>Wait {Math.ceil(cooldownLeft / 1000)}s</>
        ) : (
          <>
            Send Message <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-gray-600 text-xs leading-relaxed">
        We aim to respond within 48 hours. Your details are never shared with third parties — see our{" "}
        <Link
          href="/privacy"
          className="text-gray-400 underline-offset-2 hover:text-[#c9a96e] hover:underline transition-colors"
        >
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
