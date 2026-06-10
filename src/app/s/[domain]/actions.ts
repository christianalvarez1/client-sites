"use server";

import { sendLeadNotification } from "@/lib/leads";
import { supabaseAdmin } from "@/lib/supabase";
import { getSiteByHostname } from "@/lib/tenant";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const domain = String(formData.get("domain") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone) {
    return {
      status: "error",
      message: "Please include your name and phone number.",
    };
  }

  const site = await getSiteByHostname(domain);
  if (!site) {
    return { status: "error", message: "Something went wrong — please call us instead." };
  }

  const { error } = await supabaseAdmin().from("leads").insert({
    site_id: site.id,
    name,
    phone,
    email: email || null,
    message: message || null,
  });

  if (error) {
    console.error("Failed to store lead", error);
    return {
      status: "error",
      message: "Something went wrong — please try again or give us a call.",
    };
  }

  await sendLeadNotification(site, { name, phone, email, message });

  return {
    status: "success",
    message: "Thanks! We received your message and will get back to you shortly.",
  };
}
