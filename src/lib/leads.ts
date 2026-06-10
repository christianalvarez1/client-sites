import "server-only";
import { Resend } from "resend";
import type { Site } from "@/lib/types";

export interface LeadInput {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

/**
 * Email the business owner about a new lead. Failures are logged, never
 * surfaced to the visitor — the lead row is already safely in Supabase.
 */
export async function sendLeadNotification(site: Site, lead: LeadInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = site.business.email;
  if (!apiKey || !ownerEmail) {
    if (!apiKey) console.warn("RESEND_API_KEY not set — skipping lead email");
    return;
  }

  const bcc = process.env.LEADS_NOTIFY_EMAIL;
  const lines = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : null,
    "",
    lead.message ?? "(no message)",
  ].filter((l): l is string => l !== null);

  try {
    await new Resend(apiKey).emails.send({
      from:
        process.env.LEADS_FROM_EMAIL ??
        "Website Leads <leads@letusbuildyourwebsite.com>",
      to: ownerEmail,
      ...(bcc ? { bcc } : {}),
      replyTo: lead.email || undefined,
      subject: `New lead for ${site.business.name}: ${lead.name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("Failed to send lead notification email", err);
  }
}
