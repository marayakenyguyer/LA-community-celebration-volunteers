import React from "react";

/**
 * City Volunteers LA 2028 — Card
 * Content card. Soft daylight elevation by default; `pop` for the
 * hard ink-outlined "sticker" look. Optional top accent bar/gradient.
 */
export function Card({
  children,
  eyebrow,
  title,
  image,
  accent = "none",
  pop = false,
  interactive = false,
  style = {},
  ...rest
}) {
  const accentMap = {
    blue: "var(--blue-500)", gold: "var(--gold-500)", magenta: "var(--magenta-500)",
    green: "var(--green-500)", purple: "var(--purple-500)", rainbow: "var(--grad-rainbow)",
    sunset: "var(--grad-sunset)", none: null,
  };
  const bar = accentMap[accent];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        border: pop ? "var(--border-ink)" : "1px solid var(--line-200)",
        boxShadow: pop ? "var(--shadow-pop-sm)" : "var(--shadow-md)",
        overflow: "hidden",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = pop ? "var(--shadow-pop)" : "var(--shadow-lg)"; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = pop ? "var(--shadow-pop-sm)" : "var(--shadow-md)"; } }}
      {...rest}
    >
      {bar && <div style={{ height: "6px", background: bar, flex: "none" }} />}
      {image && (
        <div style={{ height: "172px", background: `var(--line-100) url(${image}) center/cover` }} />
      )}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {eyebrow && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{eyebrow}</span>
        )}
        {title && (
          <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "20px", lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>{title}</h3>
        )}
        {children && (
          <div style={{ fontFamily: "var(--font-text)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-body)" }}>{children}</div>
        )}
      </div>
    </div>
  );
}
