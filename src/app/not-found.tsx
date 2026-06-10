export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-md text-lg text-zinc-500">
        There&apos;s no site or page at this address. If you typed the URL by
        hand, double-check the spelling.
      </p>
    </main>
  );
}
