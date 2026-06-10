import Image from "next/image";
import type { GallerySection } from "@/lib/types";

export function Gallery({ section }: { section: GallerySection }) {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {section.heading}
        </h2>
        {section.intro && (
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">{section.intro}</p>
        )}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <figure
              key={item.image}
              className="group overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-semibold text-brand-dark">
                    {item.tag}
                  </span>
                )}
              </div>
              <figcaption className="p-4">
                <p className="font-semibold text-zinc-900">{item.title}</p>
                {item.location && (
                  <p className="text-sm text-zinc-500">{item.location}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
