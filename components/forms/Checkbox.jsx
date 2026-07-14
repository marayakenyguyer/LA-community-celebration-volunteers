import React from "react";

/**
 * City Volunteers LA 2028 — Checkbox
 * Square check with bold ink outline; checks to civic blue.
 */
export function Checkbox({ label, checked = false, onChange, disabled = false, id, ...rest }) {
  const cbId = id || (label ? "cb-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <label
      htmlFor={cbId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "11px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-text)",
        fontSize: "15px",
        color: "var(--ink-900)",
        userSelect: "none",
      }}
    >
      <span
        style={{
          width: "22px",
          height: "22px",
          flex: "none",
          borderRadius: "6px",
          border: checked ? "2px solid var(--blue-500)" : "2px solid var(--ink-900)",
          background: checked ? "var(--blue-500)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        }}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <input
        id={cbId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      {label}
    </label>
  );
}
