import Image from "next/image";
import type { AboutSection } from "@/lib/types";

export function About({ section }: { section: AboutSection }) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
            {section.heading}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-zinc-600">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {section.image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <Image
              src={section.image}
              alt={section.heading}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
