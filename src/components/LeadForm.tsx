"use client";

import { useActionState } from "react";
import { submitLead, type LeadFormState } from "@/app/s/[domain]/actions";

const initialState: LeadFormState = { status: "idle" };

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function LeadForm({ domain }: { domain: string }) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Message sent!</p>
        <p className="mt-1 text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="domain" value={domain} />
      {/* Honeypot — hidden from real visitors */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1 block text-sm font-medium">
            Name *
          </label>
          <input
            id="lead-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium">
            Phone *
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 555-5555"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lead-message" className="mb-1 block text-sm font-medium">
          How can we help?
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder="Tell us about your project…"
          className={inputClass}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm font-medium text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-brand-dark transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Get a Free Estimate"}
      </button>
    </form>
  );
}
