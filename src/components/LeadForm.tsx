"use client";

import { useActionState } from "react";
import { submitLead, type LeadFormState } from "@/app/s/[domain]/actions";

const initialState: LeadFormState = { status: "idle" };

const fieldClass =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-heading placeholder-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClass =
  "mb-1.5 block text-xs font-bold uppercase tracking-[0.06em] text-muted";

export function LeadForm({
  domain,
  services,
}: {
  domain: string;
  services?: string[];
}) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-heading">Thanks!</p>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4.5">
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

      <div className="grid gap-4.5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            Name *
          </label>
          <input
            id="lead-name"
            name="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 555-5555"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className={labelClass}>
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      {services && services.length > 0 && (
        <div>
          <label htmlFor="lead-service" className={labelClass}>
            Service Needed
          </label>
          <select id="lead-service" name="service" defaultValue="" className={fieldClass}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="lead-message" className={labelClass}>
          Project Details
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder="Tell us about your project…"
          className={fieldClass}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm font-medium text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-accent px-6 py-3.5 font-semibold text-on-accent transition hover:bg-accent-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request Free Estimate"}
      </button>
    </form>
  );
}
