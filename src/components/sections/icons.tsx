import type { JSX } from "react";

/**
 * Named line icons for service cards. A ServicesSection item references one by
 * name (`icon: "concrete"`); unknown / missing names fall back to a check mark
 * so a template stays generic and the data stays declarative.
 */
const ICONS: Record<string, JSX.Element> = {
  contracting: (
    <>
      <rect x="4" y="12" width="22" height="14" rx="1" />
      <path d="M2 12 L15 3 L28 12" />
    </>
  ),
  remodeling: (
    <>
      <path d="M6 24 L6 10 L24 10 L24 24" />
      <path d="M3 24 L27 24" />
      <path d="M12 24 L12 16 L18 16 L18 24" />
    </>
  ),
  concrete: (
    <>
      <rect x="4" y="14" width="22" height="10" rx="1" />
      <path d="M9 14 L11 8 L19 8 L21 14" />
    </>
  ),
  framing: (
    <>
      <path d="M5 26 L5 6" />
      <path d="M25 26 L25 6" />
      <path d="M5 6 L25 6" />
      <path d="M5 26 L25 6" />
    </>
  ),
  carpentry: (
    <>
      <rect x="5" y="5" width="20" height="20" rx="1" />
      <path d="M5 12 L25 12" />
      <path d="M12 12 L12 25" />
    </>
  ),
  windows: (
    <>
      <rect x="6" y="4" width="18" height="22" rx="1" />
      <path d="M15 4 L15 26" />
      <path d="M6 15 L24 15" />
    </>
  ),
  siding: (
    <>
      <path d="M4 8 L26 8" />
      <path d="M4 14 L26 14" />
      <path d="M4 20 L26 20" />
      <path d="M4 26 L26 26" />
    </>
  ),
  demolition: (
    <>
      <path d="M6 26 L24 26" />
      <path d="M8 26 L8 18 L15 12 L22 18 L22 26" />
      <path d="M5 10 L25 20" strokeDasharray="2 3" />
    </>
  ),
  deck: (
    <>
      <path d="M3 14 L27 14" />
      <path d="M6 14 L6 26" />
      <path d="M12 14 L12 26" />
      <path d="M18 14 L18 26" />
      <path d="M24 14 L24 26" />
    </>
  ),
  adu: (
    <>
      <path d="M3 26 L3 14 L11 8 L19 14 L19 26 Z" />
      <rect x="19" y="17" width="8" height="9" />
    </>
  ),
  addition: (
    <>
      <rect x="4" y="10" width="14" height="16" />
      <rect x="18" y="16" width="8" height="10" strokeDasharray="3 2" />
      <path d="M2 10 L11 4 L20 10" />
    </>
  ),
  driveway: (
    <>
      <path d="M10 4 L4 26" />
      <path d="M20 4 L26 26" />
      <path d="M12 11 L18 11" />
      <path d="M11 18 L19 18" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
};

export function ServiceIcon({
  name,
  className = "h-7 w-7 text-accent",
}: {
  name?: string;
  className?: string;
}) {
  const glyph = (name && ICONS[name]) || ICONS.check;
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
