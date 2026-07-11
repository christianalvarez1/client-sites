import Image from "next/image";
import type { GallerySection } from "@/lib/types";

export function Gallery({ section }: { section: GallerySection }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
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
        <div className="mt-14 grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <figure key={item.image} className="group">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-surface-alt">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4">
                {item.tag && (
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    {item.tag}
                  </div>
                )}
                <p className="mt-1.5 font-display text-xl font-semibold text-heading">
                  {item.title}
                </p>
                {item.location && (
                  <p className="mt-0.5 text-sm text-muted">{item.location}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
