import React, { useState } from "react";

/**
 * City Volunteers LA 2028 — Tabs
 * Underline tabs (default) or pill segmented control.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "underline", style = {} }) {
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = (v) => { setInternal(v); onChange && onChange(v); };

  if (variant === "pill") {
    return (
      <div style={{ display: "inline-flex", gap: "4px", padding: "4px", background: "var(--line-100)", borderRadius: "var(--radius-pill)", ...style }}>
        {tabs.map((t) => {
          const v = t.value ?? t; const label = t.label ?? t;
          const on = v === active;
          return (
            <button key={v} onClick={() => select(v)}
              style={{
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px",
                padding: "9px 18px", borderRadius: "var(--radius-pill)",
                background: on ? "var(--paper-2)" : "transparent",
                color: on ? "var(--ink-900)" : "var(--text-muted)",
                boxShadow: on ? "var(--shadow-sm)" : "none",
                transition: "all var(--dur-fast) var(--ease-out)",
              }}>
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "28px", borderBottom: "2px solid var(--line-200)", ...style }}>
      {tabs.map((t) => {
        const v = t.value ?? t; const label = t.label ?? t;
        const on = v === active;
        return (
          <button key={v} onClick={() => select(v)}
            style={{
              border: "none", background: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "16px",
              padding: "0 0 14px", marginBottom: "-2px",
              color: on ? "var(--ink-900)" : "var(--text-muted)",
              borderBottom: on ? "4px solid var(--blue-500)" : "4px solid transparent",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
