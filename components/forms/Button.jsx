import React from "react";

const SIZES = {
  sm: { fontSize: "13px", padding: "8px 16px", height: "36px", gap: "7px" },
  md: { fontSize: "15px", padding: "11px 22px", height: "46px", gap: "9px" },
  lg: { fontSize: "17px", padding: "15px 30px", height: "56px", gap: "11px" },
};

const VARIANTS = {
  primary: { background: "var(--blue-500)", color: "#fff", border: "2px solid var(--blue-500)" },
  gold:    { background: "var(--gold-500)", color: "var(--ink-900)", border: "2px solid var(--gold-500)" },
  dark:    { background: "var(--ink-900)", color: "#fff", border: "2px solid var(--ink-900)" },
  outline: { background: "transparent", color: "var(--ink-900)", border: "2px solid var(--ink-900)" },
  ghost:   { background: "transparent", color: "var(--blue-600)", border: "2px solid transparent" },
};

/**
 * City Volunteers LA 2028 — Button
 * Pill-shaped civic CTA. Optional hard "sticker pop" drop shadow.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "pill",
  pop = false,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const radius = shape === "pill" ? "var(--radius-pill)" : "var(--radius-md)";

  return (
    <button
      disabled={disabled}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: s.fontSize,
        letterSpacing: "0.01em",
        lineHeight: 1,
        padding: s.padding,
        minHeight: s.height,
        borderRadius: radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        boxShadow: pop && !disabled ? "var(--shadow-pop-sm)" : "none",
        transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        whiteSpace: "nowrap",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled && pop) { e.currentTarget.style.transform = "translateY(3px)"; e.currentTarget.style.boxShadow = "none"; } }}
      onMouseUp={(e) => { if (!disabled && pop) { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-pop-sm)"; } }}
      onMouseLeave={(e) => { if (!disabled) { e.currentTarget.style.transform = ""; e.currentTarget.style.filter = ""; if (pop) e.currentTarget.style.boxShadow = "var(--shadow-pop-sm)"; } }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = "brightness(0.94)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
