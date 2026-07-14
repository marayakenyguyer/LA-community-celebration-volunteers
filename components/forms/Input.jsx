import React, { useState } from "react";

/**
 * City Volunteers LA 2028 — Input
 * Labeled text field with civic-blue focus ring.
 */
export function Input({
  label,
  hint,
  error,
  type = "text",
  icon = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? "in-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "var(--danger)" : focus ? "var(--blue-500)" : "var(--line-200)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)" }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-900)", letterSpacing: "0.01em" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "var(--paper-2)",
          border: `2px solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          padding: "0 14px",
          height: "48px",
          boxShadow: focus ? "0 0 0 4px rgba(26,108,231,0.15)" : "none",
          transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        {icon && <span style={{ color: "var(--ink-300)", display: "flex" }}>{icon}</span>}
        <input
          id={inputId}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-text)",
            fontSize: "15px",
            color: "var(--ink-900)",
            minWidth: 0,
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "12px", color: error ? "var(--danger)" : "var(--text-muted)", fontFamily: "var(--font-text)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
