"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

// To activate: create a free account at https://formspree.io
// Register info@goju-karate.co.uk as your form email, then replace FORM_ID below.
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError(json?.errors?.[0]?.message ?? "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Unable to send message. Please email info@goju-karate.co.uk directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-[#111] border border-[#c0392b]/30 rounded-sm text-center h-full min-h-[400px]">
        <CheckCircle className="text-[#c0392b] mb-4" size={40} />
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2">Message Sent</h3>
        <p className="text-gray-400 text-sm">
          Thanks for getting in touch. We&apos;ll get back to you with class information as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#c0392b] transition-colors placeholder:text-gray-600"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#c0392b] transition-colors placeholder:text-gray-600"
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
          className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#c0392b] transition-colors appearance-none"
        >
          <option value="">Select your experience</option>
          <option value="none">Complete beginner — no martial arts experience</option>
          <option value="other">Experienced in another martial art</option>
          <option value="karate">Karate background</option>
          <option value="goju">Goju Ryu background</option>
          <option value="advanced">Advanced / Black belt level</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#c0392b] transition-colors placeholder:text-gray-600 resize-none"
          placeholder="Tell us a bit about yourself and what you're looking for..."
        />
      </div>

      {error && (
        <p className="text-[#c0392b] text-xs">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-4 bg-[#c0392b] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#e74c3c] transition-colors rounded-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>Sending...</>
        ) : (
          <>Send Message <Send size={16} /></>
        )}
      </button>

      <p className="text-gray-600 text-xs">
        We aim to respond within 48 hours. Your details will not be shared with third parties.
      </p>
    </form>
  );
}
