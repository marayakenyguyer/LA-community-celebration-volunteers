import React from "react";

/**
 * City Volunteers LA 2028 — Tag
 * Outlined filter/role chip. Selectable and optionally removable.
 */
export function Tag({ children, selected = false, onClick, onRemove, icon = null, style = {} }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 600,
        padding: "7px 14px",
        borderRadius: "var(--radius-pill)",
        border: "2px solid",
        borderColor: selected ? "var(--blue-500)" : "var(--line-200)",
        background: selected ? "var(--blue-500)" : "var(--paper-2)",
        color: selected ? "#fff" : "var(--ink-700)",
        cursor: onClick ? "pointer" : "default",
        transition: "all var(--dur-fast) var(--ease-out)",
        userSelect: "none",
        ...style,
      }}
    >
      {icon}
      {children}
      {onRemove && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ display: "inline-flex", cursor: "pointer", opacity: 0.7 }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </span>
      )}
    </span>
  );
}
