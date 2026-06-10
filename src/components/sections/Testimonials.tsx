import type { TestimonialsSection } from "@/lib/types";

export function Testimonials({ section }: { section: TestimonialsSection }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="text-accent" aria-hidden="true">
                {"★★★★★"}
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-white/90">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-white">
                {item.name}
                {item.location && (
                  <span className="font-normal text-white/60">
                    {" "}
                    — {item.location}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
