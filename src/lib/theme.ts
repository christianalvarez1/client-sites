import type { CSSProperties } from "react";
import type { Theme } from "@/lib/types";

/**
 * Maps a site's theme (jsonb) to the inline CSS variables the components read
 * through Tailwind (bg-surface, text-heading, font-display, …). Only keys the
 * tenant actually set are emitted; everything else falls back to the defaults
 * in globals.css, so a site can override as little or as much as it wants.
 */
export function themeToCssVars(theme: Theme): CSSProperties {
  const vars: Record<string, string> = {};
  const c = theme.colors ?? {};

  const colorMap: Record<string, string | undefined> = {
    "--brand": c.primary,
    "--brand-dark": c.primaryDark,
    "--accent": c.accent,
    "--accent-dark": c.accentDark,
    "--on-accent": c.onAccent,
    "--surface": c.surface,
    "--surface-alt": c.surfaceAlt,
    "--surface-card": c.surfaceCard,
    "--border": c.border,
    "--heading": c.heading,
    "--ink": c.ink,
    "--muted": c.muted,
    "--header-bg": c.headerBg,
    "--header-fg": c.headerFg,
    "--header-border": c.headerBorder,
    "--footer-bg": c.footerBg,
    "--footer-fg": c.footerFg,
  };

  for (const [cssVar, value] of Object.entries(colorMap)) {
    if (value) vars[cssVar] = value;
  }

  // Heading typeface: opt into the serif display face, else inherit the sans default.
  if (theme.fonts?.heading === "serif") {
    vars["--font-heading"] = "var(--font-playfair)";
  }

  return vars as CSSProperties;
}
