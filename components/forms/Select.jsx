import React, { useState } from "react";

/**
 * City Volunteers LA 2028 — Select
 * Styled native select with civic-blue focus ring.
 */
export function Select({ label, hint, options = [], value, onChange, placeholder = "Select…", id, ...rest }) {
  const [focus, setFocus] = useState(false);
  const selId = id || (label ? "sel-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)" }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-900)" }}>{label}</label>
      )}
      <div
        style={{
          position: "relative",
          border: `2px solid ${focus ? "var(--blue-500)" : "var(--line-200)"}`,
          borderRadius: "var(--radius-md)",
          background: "var(--paper-2)",
          boxShadow: focus ? "0 0 0 4px rgba(26,108,231,0.15)" : "none",
          transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        <select
          id={selId}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            width: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-text)",
            fontSize: "15px",
            color: value ? "var(--ink-900)" : "var(--ink-300)",
            padding: "0 40px 0 14px",
            height: "44px",
            cursor: "pointer",
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === "string" ? o : o.value;
            const lab = typeof o === "string" ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--ink-700)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </div>
      {hint && <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-text)" }}>{hint}</span>}
    </div>
  );
}
