import React from "react";

/**
 * City Volunteers LA 2028 — Switch
 * Pill toggle. On = civic blue (or gold via accent prop).
 */
export function Switch({ checked = false, onChange, label, accent = "blue", disabled = false, id, ...rest }) {
  const onColor = accent === "gold" ? "var(--gold-500)" : "var(--blue-500)";
  const swId = id || (label ? "sw-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <label
      htmlFor={swId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--ink-900)",
        userSelect: "none",
      }}
    >
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: "46px",
          height: "27px",
          borderRadius: "var(--radius-pill)",
          background: checked ? onColor : "var(--line-200)",
          position: "relative",
          flex: "none",
          transition: "background var(--dur-base) var(--ease-out)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "22px" : "3px",
            width: "21px",
            height: "21px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            transition: "left var(--dur-base) var(--ease-spring)",
          }}
        />
      </span>
      <input id={swId} type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
