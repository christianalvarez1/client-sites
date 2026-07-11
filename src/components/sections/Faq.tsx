"use client";

import { useState } from "react";
import type { FaqSection } from "@/lib/types";

export function Faq({ section }: { section: FaqSection }) {
  // First item open by default, matching the v2 design.
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="text-center">
          {section.eyebrow && (
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {section.eyebrow}
            </div>
          )}
          <h2 className="mt-3.5 font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              {section.intro}
            </p>
          )}
        </div>
        <div className="mt-11 flex flex-col gap-3">
          {section.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-line bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-heading">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex-none text-2xl font-normal leading-none text-accent"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 leading-relaxed text-muted">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
