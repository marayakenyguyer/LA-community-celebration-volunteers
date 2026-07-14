import React from "react";

/**
 * City Volunteers LA 2028 — Stat
 * Big condensed number with a mono label. The mission-metric look.
 */
export function Stat({ value, label, accent = "blue", align = "left", gradient = false, style = {} }) {
  const colorMap = {
    blue: "var(--blue-500)", gold: "var(--gold-500)", magenta: "var(--magenta-500)",
    green: "var(--green-500)", purple: "var(--purple-500)", ink: "var(--ink-900)",
  };
  const numColor = colorMap[accent] || colorMap.blue;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: align === "center" ? "center" : "flex-start", textAlign: align, ...style }}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.6rem, 6vw, 4rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.01em",
          color: gradient ? "transparent" : numColor,
          background: gradient ? "var(--grad-sunset)" : "none",
          WebkitBackgroundClip: gradient ? "text" : "border-box",
          backgroundClip: gradient ? "text" : "border-box",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          maxWidth: "22ch",
        }}
      >
        {label}
      </span>
    </div>
  );
}
