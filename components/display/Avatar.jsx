import React from "react";

const SIZES = { sm: 32, md: 44, lg: 60, xl: 80 };

/**
 * City Volunteers LA 2028 — Avatar
 * Circular avatar with image or initials. Optional gradient ring.
 */
export function Avatar({ src, name = "", size = "md", ring = false, tone = "blue", style = {} }) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const toneMap = {
    blue: "var(--blue-500)", gold: "var(--gold-500)", magenta: "var(--magenta-500)",
    green: "var(--green-500)", purple: "var(--purple-500)",
  };
  const bg = toneMap[tone] || toneMap.blue;

  const inner = src ? (
    <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
  ) : (
    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: px * 0.38, color: "#fff", letterSpacing: "0.01em" }}>{initials}</span>
  );

  const circle = (
    <div
      style={{
        width: px, height: px, borderRadius: "50%", overflow: "hidden",
        background: src ? "var(--line-100)" : bg,
        display: "flex", alignItems: "center", justifyContent: "center", flex: "none",
      }}
    >
      {inner}
    </div>
  );

  if (!ring) return <div style={style}>{circle}</div>;

  return (
    <div
      style={{
        padding: "3px", borderRadius: "50%", background: "var(--grad-rainbow)",
        display: "inline-flex", ...style,
      }}
    >
      <div style={{ padding: "2px", borderRadius: "50%", background: "var(--surface-card)", display: "inline-flex" }}>
        {circle}
      </div>
    </div>
  );
}
