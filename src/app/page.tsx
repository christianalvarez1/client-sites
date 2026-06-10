// Platform root (sites.letusbuildyourwebsite.com itself). Visitors land on
// client subdomains; this page just points anyone who finds it to the
// marketing site.
export default function PlatformHome() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-brand px-6 text-center text-white">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Let Us Build Your Website
      </h1>
      <p className="max-w-md text-lg text-white/70">
        This is the hosting platform for our client websites. Looking to get a
        website for your business?
      </p>
      <a
        href="https://letusbuildyourwebsite.com"
        className="mt-2 rounded-md bg-accent px-6 py-3 font-semibold text-brand-dark transition hover:brightness-110"
      >
        Visit letusbuildyourwebsite.com
      </a>
    </main>
  );
}
