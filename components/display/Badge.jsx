import React from "react";

const TONES = {
  blue:    { soft: "var(--blue-100)",  ink: "var(--blue-700)",   solid: "var(--blue-500)" },
  gold:    { soft: "var(--gold-100)",  ink: "var(--gold-600)",   solid: "var(--gold-500)" },
  green:   { soft: "#E4F6EA",          ink: "#1B7A3A",           solid: "var(--green-500)" },
  magenta: { soft: "#FFE4F0",          ink: "#C01E6C",           solid: "var(--magenta-500)" },
  purple:  { soft: "#EFE8FE",          ink: "#5A23C8",           solid: "var(--purple-500)" },
  neutral: { soft: "var(--line-100)",  ink: "var(--ink-700)",    solid: "var(--ink-900)" },
};

/**
 * City Volunteers LA 2028 — Badge
 * Small status / category pill. Soft (default) or solid.
 */
export function Badge({ children, tone = "blue", solid = false, dot = false, style = {} }) {
  const t = TONES[tone] || TONES.blue;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        background: solid ? t.solid : t.soft,
        color: solid ? (tone === "gold" ? "var(--ink-900)" : "#fff") : t.ink,
        ...style,
      }}
    >
      {dot && <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: solid ? "currentColor" : t.solid }} />}
      {children}
    </span>
  );
}
