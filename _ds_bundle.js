/* @ds-bundle: {"format":4,"namespace":"CityVolunteersLA2028DesignSystem_ea1102","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"fc229cf17496","components/display/Badge.jsx":"b701943039b4","components/display/Card.jsx":"860043b31060","components/display/Stat.jsx":"6efdceb66d13","components/display/Tag.jsx":"3c3e98da3bf3","components/forms/Button.jsx":"2d25f4fe9743","components/forms/Checkbox.jsx":"4a4e3e8312c0","components/forms/Input.jsx":"a44c6372b7ea","components/forms/Select.jsx":"dfc8ce4fd992","components/forms/Switch.jsx":"cd944e73b724","components/navigation/Tabs.jsx":"ef02abdf0d6f","ui_kits/website/App.jsx":"1477d1492a31","ui_kits/website/ApplyScreen.jsx":"f1077ceacdb2","ui_kits/website/FourStepsToJoin.jsx":"2b01436d8e23","ui_kits/website/HomeScreen.jsx":"3463490d3cef","ui_kits/website/HowAreWeDifferent.jsx":"4c8a0ae6d14c","ui_kits/website/Icon.jsx":"940ae1e90017","ui_kits/website/JourneyScreen.jsx":"28ae4d0f6b7d","ui_kits/website/LandingOfficial.jsx":"9ea7bd472f65","ui_kits/website/LandingPhoto.jsx":"30d7de4bf61c","ui_kits/website/LandingThemed.jsx":"d4e61e50149c","ui_kits/website/RolesScreen.jsx":"ace82902fe21","ui_kits/website/SiteChrome.jsx":"30cb6ab940a1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CityVolunteersLA2028DesignSystem_ea1102 = window.CityVolunteersLA2028DesignSystem_ea1102 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 44,
  lg: 60,
  xl: 80
};

/**
 * City Volunteers LA 2028 — Avatar
 * Circular avatar with image or initials. Optional gradient ring.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  tone = "blue",
  style = {}
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const toneMap = {
    blue: "var(--blue-500)",
    gold: "var(--gold-500)",
    magenta: "var(--magenta-500)",
    green: "var(--green-500)",
    purple: "var(--purple-500)"
  };
  const bg = toneMap[tone] || toneMap.blue;
  const inner = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: px * 0.38,
      color: "#fff",
      letterSpacing: "0.01em"
    }
  }, initials);
  const circle = /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      overflow: "hidden",
      background: src ? "var(--line-100)" : bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, inner);
  if (!ring) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, circle);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "3px",
      borderRadius: "50%",
      background: "var(--grad-rainbow)",
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px",
      borderRadius: "50%",
      background: "var(--surface-card)",
      display: "inline-flex"
    }
  }, circle));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  blue: {
    soft: "var(--blue-100)",
    ink: "var(--blue-700)",
    solid: "var(--blue-500)"
  },
  gold: {
    soft: "var(--gold-100)",
    ink: "var(--gold-600)",
    solid: "var(--gold-500)"
  },
  green: {
    soft: "#E4F6EA",
    ink: "#1B7A3A",
    solid: "var(--green-500)"
  },
  magenta: {
    soft: "#FFE4F0",
    ink: "#C01E6C",
    solid: "var(--magenta-500)"
  },
  purple: {
    soft: "#EFE8FE",
    ink: "#5A23C8",
    solid: "var(--purple-500)"
  },
  neutral: {
    soft: "var(--line-100)",
    ink: "var(--ink-700)",
    solid: "var(--ink-900)"
  }
};

/**
 * City Volunteers LA 2028 — Badge
 * Small status / category pill. Soft (default) or solid.
 */
function Badge({
  children,
  tone = "blue",
  solid = false,
  dot = false,
  style = {}
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: solid ? tone === "gold" ? "var(--ink-900)" : "#fff" : t.ink,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: solid ? "currentColor" : t.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * City Volunteers LA 2028 — Card
 * Content card. Soft daylight elevation by default; `pop` for the
 * hard ink-outlined "sticker" look. Optional top accent bar/gradient.
 */
function Card({
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
    blue: "var(--blue-500)",
    gold: "var(--gold-500)",
    magenta: "var(--magenta-500)",
    green: "var(--green-500)",
    purple: "var(--purple-500)",
    rainbow: "var(--grad-rainbow)",
    sunset: "var(--grad-sunset)",
    none: null
  };
  const bar = accentMap[accent];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: pop ? "var(--border-ink)" : "1px solid var(--line-200)",
      boxShadow: pop ? "var(--shadow-pop-sm)" : "var(--shadow-md)",
      overflow: "hidden",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = pop ? "var(--shadow-pop)" : "var(--shadow-lg)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = pop ? "var(--shadow-pop-sm)" : "var(--shadow-md)";
      }
    }
  }, rest), bar && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "6px",
      background: bar,
      flex: "none"
    }
  }), image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "172px",
      background: `var(--line-100) url(${image}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "20px",
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/**
 * City Volunteers LA 2028 — Stat
 * Big condensed number with a mono label. The mission-metric look.
 */
function Stat({
  value,
  label,
  accent = "blue",
  align = "left",
  gradient = false,
  style = {}
}) {
  const colorMap = {
    blue: "var(--blue-500)",
    gold: "var(--gold-500)",
    magenta: "var(--magenta-500)",
    green: "var(--green-500)",
    purple: "var(--purple-500)",
    ink: "var(--ink-900)"
  };
  const numColor = colorMap[accent] || colorMap.blue;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.6rem, 6vw, 4rem)",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      color: gradient ? "transparent" : numColor,
      background: gradient ? "var(--grad-sunset)" : "none",
      WebkitBackgroundClip: gradient ? "text" : "border-box",
      backgroundClip: gradient ? "text" : "border-box"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      maxWidth: "22ch"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/**
 * City Volunteers LA 2028 — Tag
 * Outlined filter/role chip. Selectable and optionally removable.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  icon = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
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
      ...style
    }
  }, icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: "13px",
    padding: "8px 16px",
    height: "36px",
    gap: "7px"
  },
  md: {
    fontSize: "15px",
    padding: "11px 22px",
    height: "46px",
    gap: "9px"
  },
  lg: {
    fontSize: "17px",
    padding: "15px 30px",
    height: "56px",
    gap: "11px"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--blue-500)",
    color: "#fff",
    border: "2px solid var(--blue-500)"
  },
  gold: {
    background: "var(--gold-500)",
    color: "var(--ink-900)",
    border: "2px solid var(--gold-500)"
  },
  dark: {
    background: "var(--ink-900)",
    color: "#fff",
    border: "2px solid var(--ink-900)"
  },
  outline: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "2px solid var(--ink-900)"
  },
  ghost: {
    background: "transparent",
    color: "var(--blue-600)",
    border: "2px solid transparent"
  }
};

/**
 * City Volunteers LA 2028 — Button
 * Pill-shaped civic CTA. Optional hard "sticker pop" drop shadow.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "pill",
  pop = false,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const radius = shape === "pill" ? "var(--radius-pill)" : "var(--radius-md)";
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: s.fontSize,
      letterSpacing: "0.01em",
      lineHeight: 1,
      padding: s.padding,
      minHeight: s.height,
      borderRadius: radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: pop && !disabled ? "var(--shadow-pop-sm)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && pop) {
        e.currentTarget.style.transform = "translateY(3px)";
        e.currentTarget.style.boxShadow = "none";
      }
    },
    onMouseUp: e => {
      if (!disabled && pop) {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-pop-sm)";
      }
    },
    onMouseLeave: e => {
      if (!disabled) {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.filter = "";
        if (pop) e.currentTarget.style.boxShadow = "var(--shadow-pop-sm)";
      }
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * City Volunteers LA 2028 — Checkbox
 * Square check with bold ink outline; checks to civic blue.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const cbId = id || (label ? "cb-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "11px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      color: "var(--ink-900)",
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "22px",
      flex: "none",
      borderRadius: "6px",
      border: checked ? "2px solid var(--blue-500)" : "2px solid var(--ink-900)",
      background: checked ? "var(--blue-500)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * City Volunteers LA 2028 — Input
 * Labeled text field with civic-blue focus ring.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--ink-900)",
      letterSpacing: "0.01em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "var(--paper-2)",
      border: `2px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "0 14px",
      height: "48px",
      boxShadow: focus ? "0 0 0 4px rgba(26,108,231,0.15)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)",
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      color: "var(--ink-900)",
      minWidth: 0,
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: error ? "var(--danger)" : "var(--text-muted)",
      fontFamily: "var(--font-text)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * City Volunteers LA 2028 — Select
 * Styled native select with civic-blue focus ring.
 */
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  id,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const selId = id || (label ? "sel-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: `2px solid ${focus ? "var(--blue-500)" : "var(--line-200)"}`,
      borderRadius: "var(--radius-md)",
      background: "var(--paper-2)",
      boxShadow: focus ? "0 0 0 4px rgba(26,108,231,0.15)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      cursor: "pointer"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-text)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * City Volunteers LA 2028 — Switch
 * Pill toggle. On = civic blue (or gold via accent prop).
 */
function Switch({
  checked = false,
  onChange,
  label,
  accent = "blue",
  disabled = false,
  id,
  ...rest
}) {
  const onColor = accent === "gold" ? "var(--gold-500)" : "var(--blue-500)";
  const swId = id || (label ? "sw-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      fontWeight: 500,
      color: "var(--ink-900)",
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: "46px",
      height: "27px",
      borderRadius: "var(--radius-pill)",
      background: checked ? onColor : "var(--line-200)",
      position: "relative",
      flex: "none",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "3px",
      left: checked ? "22px" : "3px",
      width: "21px",
      height: "21px",
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      transition: "left var(--dur-base) var(--ease-spring)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * City Volunteers LA 2028 — Tabs
 * Underline tabs (default) or pill segmented control.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style = {}
}) {
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: "4px",
        padding: "4px",
        background: "var(--line-100)",
        borderRadius: "var(--radius-pill)",
        ...style
      }
    }, tabs.map(t => {
      const v = t.value ?? t;
      const label = t.label ?? t;
      const on = v === active;
      return /*#__PURE__*/React.createElement("button", {
        key: v,
        onClick: () => select(v),
        style: {
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "14px",
          padding: "9px 18px",
          borderRadius: "var(--radius-pill)",
          background: on ? "var(--paper-2)" : "transparent",
          color: on ? "var(--ink-900)" : "var(--text-muted)",
          boxShadow: on ? "var(--shadow-sm)" : "none",
          transition: "all var(--dur-fast) var(--ease-out)"
        }
      }, label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px",
      borderBottom: "2px solid var(--line-200)",
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => select(v),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: "16px",
        padding: "0 0 14px",
        marginBottom: "-2px",
        color: on ? "var(--ink-900)" : "var(--text-muted)",
        borderBottom: on ? "4px solid var(--blue-500)" : "4px solid transparent",
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// City Volunteers LA 2028 — Website kit app shell & router
function App() {
  const [route, setRoute] = React.useState("home");
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  let Screen = window.HomeScreen;
  if (route === "roles") Screen = window.RolesScreen;else if (route === "journey") Screen = window.JourneyScreen;else if (route === "apply") Screen = window.ApplyScreen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    go: go
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
// City Volunteers LA 2028 — Application screen
const ApplyDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const REQS = [{
  icon: "users",
  t: "Be 18 or older at the time you apply"
}, {
  icon: "languages",
  t: "Proficient in English (reading & writing)"
}, {
  icon: "calendar",
  t: "Available for 10+ non-consecutive shifts"
}, {
  icon: "map-pin",
  t: "Present in Greater LA during the Games"
}];
function ApplySuccess({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 28px",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 48,
    color: "#fff",
    stroke: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 14
    }
  }, "Application received"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,6vw,4rem)",
      lineHeight: 0.92,
      color: "var(--ink-900)",
      margin: 0
    }
  }, "Welcome to the crew"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      color: "var(--text-body)",
      marginTop: 18
    }
  }, "Thanks for stepping up, neighbor. We'll be in touch as role offers roll out \u2014 keep an eye on your inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ApplyDS.Button, {
    variant: "primary",
    pop: true,
    onClick: () => go("journey"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "See what's next"), /*#__PURE__*/React.createElement(ApplyDS.Button, {
    variant: "outline",
    onClick: () => go("home")
  }, "Back to home"))));
}
function ApplyScreen({
  go
}) {
  const [done, setDone] = React.useState(false);
  const [loc, setLoc] = React.useState("");
  const [shift, setShift] = React.useState("");
  const [c1, setC1] = React.useState(false);
  const [sms, setSms] = React.useState(true);
  if (done) return /*#__PURE__*/React.createElement(ApplySuccess, {
    go: go
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(40px,5vw,72px) clamp(20px,5vw,48px) clamp(64px,8vw,104px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 44,
      alignItems: "start"
    },
    className: "cv-apply-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 12
    }
  }, "Become a Volunteer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,5vw,3.4rem)",
      lineHeight: 0.92,
      color: "var(--ink-900)",
      margin: "0 0 28px"
    }
  }, "Tell us about you"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
      window.scrollTo(0, 0);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ApplyDS.Input, {
    label: "First name",
    placeholder: "Maya",
    required: true
  }), /*#__PURE__*/React.createElement(ApplyDS.Input, {
    label: "Last name",
    placeholder: "Ortiz",
    required: true
  })), /*#__PURE__*/React.createElement(ApplyDS.Input, {
    label: "Email address",
    type: "email",
    placeholder: "you@email.com",
    hint: "We'll only use this for shift updates.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "globe",
      size: 18,
      color: "var(--ink-300)"
    }),
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ApplyDS.Select, {
    label: "Preferred location",
    placeholder: "Choose a city",
    value: loc,
    onChange: e => setLoc(e.target.value),
    options: ["Greater Los Angeles", "San Diego", "San José", "New York City", "Other host city"]
  }), /*#__PURE__*/React.createElement(ApplyDS.Select, {
    label: "Shift window",
    placeholder: "When can you serve?",
    value: shift,
    onChange: e => setShift(e.target.value),
    options: ["Olympic Games (Jul–Aug 2028)", "Paralympic Games (Aug–Sep 2028)", "Both", "Year-round"]
  })), /*#__PURE__*/React.createElement(ApplyDS.Input, {
    label: "Why do you want to volunteer?",
    placeholder: "A sentence or two about what drew you in\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--line-200)",
      borderRadius: "var(--radius-md)",
      padding: "18px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ApplyDS.Checkbox, {
    label: "I confirm I'll be 18 or older when the Games begin.",
    checked: c1,
    onChange: e => setC1(e.target.checked)
  }), /*#__PURE__*/React.createElement(ApplyDS.Switch, {
    label: "Text me when shifts open in my neighborhood.",
    checked: sms,
    onChange: setSms,
    accent: "gold"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ApplyDS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    }),
    type: "submit"
  }, "Submit application")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 96,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-900)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 24px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 16
    }
  }, "Before you apply"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, REQS.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 18,
    color: "var(--blue-300)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.45,
      color: "#E7EDFA"
    }
  }, r.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sun)",
      borderRadius: "var(--radius-lg)",
      padding: "22px 24px",
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "accessibility",
    size: 26,
    color: "var(--gold-600)",
    stroke: 2.2
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--ink-900)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "A Games for All."), " We welcome people of all abilities, including those with disabilities. Tell us how we can support you.")))));
}
window.ApplyScreen = ApplyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FourStepsToJoin.jsx
try { (() => {
// City Volunteers LA 2028 — Reusable section: "Four Steps to Join"
// Extracted from the Sunset Stadium landing page's "How it works" section.
// Self-contained: no theme prop required. Drop into any page that has
// loaded the design-system bundle + Icon.jsx.
const FSJ_STEPS = [{
  n: "01",
  icon: "sparkles",
  color: "var(--blue-500)",
  title: "Application",
  body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required.",
  date: "Opens early 2027"
}, {
  n: "02",
  icon: "search",
  color: "var(--purple-500)",
  title: "Vetting",
  body: "We review applications and run a background check once you accept a conditional role offer.",
  date: "Spring–summer 2027"
}, {
  n: "03",
  icon: "graduation-cap",
  color: "#D9481F",
  title: "Selection & Onboarding",
  body: "Selected volunteers get an official offer, then complete training built for their role.",
  date: "Late 2027–early 2028"
}, {
  n: "04",
  icon: "star",
  color: "var(--gold-500)",
  title: "Deployment",
  body: "Pick up your kit and take your post as the face of LA across the city.",
  date: "Summer 2028"
}];
function FourStepsToJoin({
  id = "how",
  bg = "var(--surface-sky)"
} = {}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 auto",
      maxWidth: "18ch",
      textAlign: "center"
    }
  }, "HOW TO JOIN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "clamp(24px,4vw,52px)",
      alignItems: "center",
      marginTop: 44,
      textAlign: "left"
    },
    className: "fsj-intro-grid"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.1rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, "You don't need a special background or a specific skill set. You just need to love this city and want to share it!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "We're looking for Angelenos from all over the City and beyond - people who know their neighborhoods, speak their community's languages, and are proud of what Los Angeles has to offer. Think of yourself as an ambassador to the City.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Beyond that, we're especially seeking people who bring:", /*#__PURE__*/React.createElement("br", null), "\u2022 Local knowledge of your neighborhood, transit routes, and points of interest", /*#__PURE__*/React.createElement("br", null), "\u2022 Language skills that reflect the incredible diversity of Los Angeles", /*#__PURE__*/React.createElement("br", null), "\u2022 A welcoming attitude and the ability to stay calm in busy, high-energy environments", /*#__PURE__*/React.createElement("br", null), "\u2022 A genuine commitment to giving back and contributing to the city's future", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      minHeight: 240,
      backgroundImage: "url(assets/photos/crew-circle-trees.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
      marginTop: 44
    }
  }, FSJ_STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--surface-card)",
      border: "2px solid var(--ink-900)",
      boxShadow: "var(--shadow-pop-sm)",
      borderRadius: "var(--radius-lg)",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 14,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 13,
      background: s.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26,
    color: s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff",
    stroke: 2.3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      color: "var(--line-200)"
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: 19,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, s.body), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ink-900)",
      background: "var(--surface-page)",
      border: `1.5px solid ${s.color}`,
      borderRadius: "var(--radius-pill)",
      padding: "5px 12px"
    }
  }, s.date)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginTop: 24,
      maxWidth: "70ch",
      marginLeft: "auto",
      marginRight: "auto"
    }
  })));
}
window.FourStepsToJoin = FourStepsToJoin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FourStepsToJoin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// City Volunteers LA 2028 — Home screen
const HomeDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO = "../../assets/photos/volunteers-sunset.jpg";
const MISSIONS = [{
  icon: "map-pin",
  title: "Venue Approach",
  body: "Guide arriving crowds from transit to the gates with a smile and clear direction.",
  accent: "blue"
}, {
  icon: "megaphone",
  title: "Celebrations & Activations",
  body: "Bring the energy at neighborhood watch-party and festival sites across the city.",
  accent: "magenta"
}, {
  icon: "building",
  title: "City Media Center",
  body: "Welcome press and storytellers documenting LA's moment on the world stage.",
  accent: "purple"
}, {
  icon: "ticket",
  title: "Accreditation",
  body: "Help credential the workforce that keeps the Games for All running.",
  accent: "green"
}, {
  icon: "accessibility",
  title: "City Guidance",
  body: "Provide wayfinding and accessibility support so every visitor feels at home.",
  accent: "gold"
}];
const VISION = [{
  icon: "users",
  h: "Priority Communities",
  b: "Roles for foster youth, second-chance, veterans and college corps — a force that looks like LA."
}, {
  icon: "graduation-cap",
  h: "Training Up",
  b: "Workforce development and emergency-response skills that outlast the closing ceremony."
}, {
  icon: "handshake",
  h: "Permanent Volunteer Hub",
  b: "One front door to get engaged with civic service across the City of Los Angeles."
}, {
  icon: "heart",
  h: "New Civic Habits",
  b: "Citizen academies and neighbor-to-neighbor service that build lasting habits."
}];
function HomeHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ink-900)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${PHOTO})`,
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(11,18,48,0.35) 0%, rgba(11,18,48,0.55) 45%, rgba(11,18,48,0.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-180px",
      top: "-180px",
      width: 520,
      height: 520,
      borderRadius: "50%",
      background: "radial-gradient(circle, transparent 0 46%, rgba(255,45,139,.5) 46% 54%, rgba(255,107,61,.5) 54% 62%, rgba(255,178,0,.5) 62% 70%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px) clamp(56px,7vw,96px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 22
    }
  }, "City of Los Angeles \xB7 Olympic & Paralympic Games"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      fontSize: "clamp(3rem, 8vw, 6.5rem)",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      maxWidth: "16ch"
    }
  }, "Los Angeles", /*#__PURE__*/React.createElement("br", null), "welcomes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-sunset)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "the world")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "clamp(1.05rem,2vw,1.35rem)",
      lineHeight: 1.55,
      color: "#E7EDFA",
      maxWidth: "46ch",
      marginTop: 26
    }
  }, "We're recruiting 5,000\u201310,000 City Volunteers to be the warm, knowledgeable face of LA. Neighbors welcoming neighbors \u2014 in every council district."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(HomeDS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    }),
    onClick: () => go("apply")
  }, "Become a Volunteer"), /*#__PURE__*/React.createElement(HomeDS.Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go("roles"),
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.6)"
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "#fff"
    })
  }, "Explore roles"))));
}
function StatsBand() {
  const items = [{
    v: "5K–10K",
    l: "Volunteers mobilized",
    a: "gold",
    grad: false
  }, {
    v: "25,000+",
    l: "Total shifts",
    a: "magenta"
  }, {
    v: "15",
    l: "Council districts",
    a: "green"
  }, {
    v: "100%",
    l: "A Games for All",
    a: "blue"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 clamp(20px,5vw,48px) clamp(48px,6vw,72px)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    },
    className: "cv-stats-grid"
  }, items.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      borderTop: "3px solid rgba(255,255,255,0.16)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.4rem,5vw,3.6rem)",
      lineHeight: 0.9,
      color: s.a === "gold" ? "var(--gold-400)" : s.a === "magenta" ? "var(--magenta-300)" : s.a === "green" ? "var(--green-300)" : "var(--blue-300)"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "#AEB9D6",
      marginTop: 10
    }
  }, s.l)))));
}
function SectionHead({
  kicker,
  title,
  intro,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === "center" ? "64ch" : "100%",
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 14
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: 0,
      maxWidth: "18ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.15rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      marginTop: 18,
      maxWidth: "58ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, intro));
}
function MissionsSection({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Volunteer Missions",
    title: "Five ways to show up",
    intro: "City Volunteers are not security or event staff. You're a neighbor \u2014 providing wayfinding, accessibility support, information, and the civic energy that makes every visitor feel at home."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 22,
      marginTop: 44
    }
  }, MISSIONS.map(m => /*#__PURE__*/React.createElement(HomeDS.Card, {
    key: m.title,
    accent: m.accent,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: "var(--surface-sky)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 26,
    color: "var(--blue-600)",
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 20,
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, m.body))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      background: "var(--grad-dusk)",
      padding: "26px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 26,
      lineHeight: 0.95,
      color: "#fff"
    }
  }, "Find your role"), /*#__PURE__*/React.createElement(HomeDS.Button, {
    variant: "gold",
    pop: true,
    onClick: () => go("roles"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "var(--ink-900)"
    }),
    style: {
      alignSelf: "flex-start"
    }
  }, "Browse all roles")))));
}
function VisionSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sky)",
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "The Larger Vision",
    title: "A lasting culture of service",
    intro: "The Games are a once-in-a-generation catalyst. LA 2028 volunteer alumni become the core of a permanent civic infrastructure \u2014 trained, connected, and ready."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
      marginTop: 44
    }
  }, VISION.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.h,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 24px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 28,
    color: "var(--purple-500)",
    stroke: 2.2
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 18,
      color: "var(--ink-900)",
      margin: "16px 0 8px",
      letterSpacing: "-0.01em"
    }
  }, v.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, v.b))))));
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--grad-sunset)",
      padding: "clamp(56px,8vw,96px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(11,18,48,0.6)",
      marginBottom: 16
    }
  }, "Applications open July 14"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,6vw,4.5rem)",
      lineHeight: 0.9,
      color: "var(--ink-900)",
      margin: 0
    }
  }, "Your city. Your shift.", /*#__PURE__*/React.createElement("br", null), "Your moment."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(HomeDS.Button, {
    variant: "dark",
    size: "lg",
    pop: true,
    onClick: () => go("apply"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "#fff"
    })
  }, "Become a Volunteer"))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HomeHero, {
    go: go
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(MissionsSection, {
    go: go
  }), /*#__PURE__*/React.createElement(VisionSection, null), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowAreWeDifferent.jsx
try { (() => {
// City Volunteers LA 2028 — Reusable section: "How are we different"
// Extracted from the Sunset Stadium landing page's City Volunteers vs LA28 section.
// Self-contained: no theme prop required. Drop into any page that has
// loaded the design-system bundle + Icon.jsx.
const HAWD_DIFF = [{
  tag: "City of LA",
  title: "City Volunteer Program",
  accent: "var(--blue-500)",
  points: [{
    icon: "map-pin",
    t: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts."
  }, {
    icon: "handshake",
    t: "Welcoming, wayfinding, accessibility support and civic energy. Not security or event staff."
  }, {
    icon: "building",
    t: "Run by the City of Los Angeles. Complements — and is separate from — the official Games workforce."
  }]
}, {
  tag: "LA28",
  title: "Games Volunteers",
  accent: "#8A5700",
  points: [{
    icon: "ticket",
    t: "Inside official competition venues and Games operations."
  }, {
    icon: "users",
    t: "Roles defined and managed by the LA28 organizing committee."
  }, {
    icon: "calendar",
    t: "Apply through LA28 — applications open July 14."
  }]
}];
function HowAreWeDifferent({
  id = "diff",
  bg = "var(--surface-page)"
} = {}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "#000000",
      margin: "0 auto 14px"
    }
  }, "How are we different from LA28?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.12rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      marginTop: 0,
      marginBottom: 0,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, "The City Volunteer Program and LA28's Games Volunteers are two distinct teams that work side by side. One serves the city; one serves the venues. Many Angelenos apply to both."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22,
      marginTop: 40
    },
    className: "hawd-grid-2"
  }, HAWD_DIFF.map((c, ci) => {
    const onCardDark = ci === 1 ? false : false; // both cards light by default
    return /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--line-200)",
        boxShadow: "var(--shadow-md)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: c.accent
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "26px 26px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: c.accent,
        marginBottom: 8
      }
    }, c.tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 900,
        fontSize: 24,
        letterSpacing: "-0.02em",
        color: "var(--ink-900)",
        margin: "0 0 18px"
      }
    }, c.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16
      }
    }, c.points.map((pt, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        flex: "none",
        background: c.accent,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: pt.icon,
      size: 17,
      color: "#fff",
      stroke: 2.2
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 14.5,
        lineHeight: 1.5,
        color: "var(--text-body)"
      }
    }, pt.t))))));
  }))));
}
window.HowAreWeDifferent = HowAreWeDifferent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowAreWeDifferent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// City Volunteers LA 2028 — Icon set (curated Lucide, ISC-licensed, inlined for reliability)
const CV_ICON_PATHS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  accessibility: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-3.5-7.36"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25H21"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.59 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.355 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>'
};
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const inner = CV_ICON_PATHS[name];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner || ""
    },
    "aria-hidden": "true",
    focusable: "false",
    ...rest
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JourneyScreen.jsx
try { (() => {
// City Volunteers LA 2028 — Volunteer Journey timeline screen
const JourneyDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const STEPS = [{
  n: "01",
  color: "var(--blue-500)",
  icon: "sparkles",
  when: "Now – June 2026",
  title: "Apply",
  body: "Tell us who you are and how you want to show up. Applications take about 15 minutes — no experience required."
}, {
  n: "02",
  color: "var(--purple-500)",
  icon: "check",
  when: "Late 2026 – Spring 2027",
  title: "Selection & Role Offers",
  body: "If selected, you'll receive an official role offer. A background review follows once you accept a conditional offer."
}, {
  n: "03",
  color: "var(--coral-500)",
  icon: "graduation-cap",
  when: "2027 – 2028",
  title: "Gear Up & Get Ready",
  body: "Pick up your kit and complete training built to prepare you for your role — plus skills that last a lifetime."
}, {
  n: "04",
  color: "var(--gold-500)",
  icon: "star",
  when: "Summer 2028",
  title: "Games Time",
  body: "Step into the heart of the action and be the face of LA for the biggest Games yet. This is your moment."
}];
function JourneyScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)",
      padding: "clamp(48px,6vw,84px) clamp(20px,5vw,48px)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-160px",
      bottom: "-220px",
      width: 480,
      height: 480,
      borderRadius: "50%",
      background: "radial-gradient(circle, transparent 0 48%, rgba(26,108,231,.5) 48% 56%, rgba(47,208,214,.45) 56% 64%, rgba(47,180,87,.4) 64% 72%, transparent 72%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 14
    }
  }, "Your Journey"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,6vw,4.5rem)",
      lineHeight: 0.92,
      color: "#fff",
      margin: 0
    }
  }, "From hello to ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-sky)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "the Games")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      color: "#D9E2F5",
      maxWidth: "50ch",
      marginTop: 16
    }
  }, "Four steps over two years. Here's exactly what to expect from the day you apply to your first shift on the world stage."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,8vw,96px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 20,
      bottom: 20,
      width: 4,
      background: "var(--grad-rainbow)",
      borderRadius: 4
    },
    className: "cv-journey-spine"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "flex",
      gap: 26,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: 66,
      flex: "none",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: s.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 0 6px var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28,
    color: s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff",
    stroke: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "2px solid var(--ink-900)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-pop-sm)",
      padding: "22px 24px",
      flex: 1,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: s.color
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, s.when)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(JourneyDS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    onClick: () => go("apply"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    })
  }, "Start your application")))));
}
window.JourneyScreen = JourneyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JourneyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingOfficial.jsx
try { (() => {
// City Volunteers LA 2028 — Official page, closely reflecting the client mock
// (real photography, Mayor quote, "How to join", Shine LA promo, City seal)
const ODS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO_CREW = "assets/photos/crew-circle-trees.jpg";
const PHOTO_PARK = "assets/photos/kick-it-park-group.jpg";
const SHINE_BANNER = "assets/photos/shine-la-banner.jpg";
const CITY_SEAL = "assets/photos/city-seal.png";
function oScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 10,
    behavior: "smooth"
  });
}
const WHY = [{
  icon: "heart",
  color: "var(--magenta-500)",
  h: "Be part of history",
  b: "Step into a once-in-a-generation moment for your city."
}, {
  icon: "graduation-cap",
  color: "var(--coral-500)",
  h: "Build lasting skills",
  b: "Training that outlasts the closing ceremony."
}, {
  icon: "users",
  color: "var(--purple-500)",
  h: "Find your people",
  b: "Build community and join a network of amazing Angelenos."
}, {
  icon: "accessibility",
  color: "var(--green-500)",
  h: "Join a Games for All",
  b: "Find meaningful roles for every ability and skill set."
}];
const STEPS = [{
  n: "01",
  icon: "sparkles",
  color: "var(--blue-500)",
  title: "Application",
  body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required."
}, {
  n: "02",
  icon: "search",
  color: "var(--purple-500)",
  title: "Vetting",
  body: "We review applications and run a background check once you accept a conditional role offer."
}, {
  n: "03",
  icon: "graduation-cap",
  color: "var(--coral-500)",
  title: "Selection & Onboarding",
  body: "Selected volunteers get an official offer, then complete training built for their role."
}, {
  n: "04",
  icon: "star",
  color: "var(--gold-500)",
  title: "Deployment",
  body: "Pick up your kit and take your post as the face of LA across the city."
}];
const DIFF = [{
  tag: "City of LA",
  title: "City Volunteer Program",
  accent: "var(--coral-500)",
  photo: PHOTO_PARK,
  body: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts. Welcoming, wayfinding and civic energy. Not security or event staff. Run by the City of Los Angeles — complements, and is separate from, the official Games workforce."
}, {
  tag: "LA28",
  title: "Games Volunteers",
  accent: "var(--blue-500)",
  photo: PHOTO_CREW,
  body: "Inside official competition venues and Games operations. Roles are defined and managed by the LA28 organizing committee. Many Angelenos apply to both — one serves the city, one serves the venues."
}];
const ASKS = [{
  icon: "map-pin",
  t: "Local knowledge of your neighborhood, transit routes, and points of interest."
}, {
  icon: "languages",
  t: "Language skills that reflect the incredible diversity of Los Angeles."
}, {
  icon: "heart",
  t: "A welcoming attitude and the ability to stay calm in busy, high-energy environments."
}, {
  icon: "handshake",
  t: "A genuine commitment to giving back and contributing to the city's future."
}];

/* ---------------- Header ---------------- */
function OHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(RainbowBar, {
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "12px clamp(20px,5vw,48px)",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)",
      WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)",
      mask: "radial-gradient(circle, transparent 38%, #000 39%)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, "City ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "Volunteers")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#9AA6C6",
      marginTop: 4
    }
  }, "Los Angeles \xB7 LA 2028"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#join",
    onClick: e => {
      e.preventDefault();
      oScroll("join");
    },
    className: "cv-hide-sm",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: "#C7D2EC",
      textDecoration: "none"
    }
  }, "How to join"), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    onClick: e => {
      e.preventDefault();
      oScroll("why");
    },
    className: "cv-hide-sm",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: "#C7D2EC",
      textDecoration: "none"
    }
  }, "Why volunteer"), /*#__PURE__*/React.createElement(ODS.Button, {
    variant: "gold",
    pop: true,
    size: "sm",
    onClick: () => oScroll("signup")
  }, "Sign up for updates"))));
}

/* ---------------- 1. Full-bleed hero video (no text) ---------------- */
function HeroVideo() {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width: "100%",
      height: "clamp(420px, 78vh, 860px)",
      background: "#000",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${PHOTO_CREW})`,
      backgroundSize: "cover",
      backgroundPosition: "center 42%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: playing ? "rgba(11,18,48,0.08)" : "rgba(11,18,48,0.3)",
      transition: "background .3s ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    "aria-label": playing ? "Pause" : "Play volunteer film",
    style: {
      width: 104,
      height: 104,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "var(--grad-sunset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 14px 40px rgba(0,0,0,0.4)"
    }
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "38",
    height: "38",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: "rgba(255,255,255,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: playing ? "100%" : "0%",
      background: "var(--grad-sunset)",
      transition: playing ? "width 84s linear" : "width .3s ease"
    }
  })));
}

/* ---------------- 2. Title + blurb ---------------- */
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--grad-dusk)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 18
    }
  }, "City of Los Angeles \xB7 2028 Games Volunteers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      fontSize: "clamp(2.4rem,6vw,4.6rem)",
      lineHeight: 0.94
    }
  }, "Be the face of Los Angeles"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.2rem",
      lineHeight: 1.65,
      color: "#F0E8FF",
      margin: "22px auto 0",
      maxWidth: "58ch"
    }
  }, "In 2028, LA welcomes the world for the Olympic and Paralympic Games. Thousands of City Volunteers will help \u2014 welcoming newcomers, neighbors, and visitors from across the region and the world."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.05rem",
      lineHeight: 1.65,
      color: "#DCD0F5",
      margin: "16px auto 0",
      maxWidth: "62ch"
    }
  }, "The City of Los Angeles is recruiting ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff"
    }
  }, "5,000 City Volunteers"), " for the Games \u2014 the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites. We bring wayfinding, accessibility support, information, and public joy that makes every visitor feel at home and every Angeleno feel connected to the Games."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ODS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    onClick: () => oScroll("join"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    })
  }, "Join the 2028 Crew"))));
}

/* ---------------- 2b. Mayor quote ---------------- */
function MayorQuote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)",
      padding: "clamp(52px,7vw,88px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: "clamp(28px,4vw,52px)",
      alignItems: "center"
    },
    className: "of-grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      minHeight: 260,
      backgroundImage: `url(${PHOTO_PARK})`,
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 30,
    color: "var(--gold-400)",
    stroke: 2
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "clamp(1.2rem,2.4vw,1.6rem)",
      lineHeight: 1.5,
      color: "#fff",
      margin: "16px 0 22px",
      maxWidth: "48ch"
    }
  }, "\u201CThe 2028 Games are an opportunity to reimagine our infrastructure, strengthen community resilience, and expand opportunity for all Angelenos \u2014 a true \u2018Games for All\u2019. This is my vision for the 2028 Games \u2014 an LA made better for all Angelenos.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 8,
      background: "var(--blue-700)",
      borderRadius: "var(--radius-md)",
      padding: "12px 20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 18,
      color: "#fff"
    }
  }, "Mayor Karen Bass"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      height: 4,
      borderRadius: 4,
      overflow: "hidden",
      width: 160
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--green-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--gold-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--magenta-500)"
    }
  }))))));
}

/* ---------------- Why volunteer ---------------- */
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: "var(--ink-900)",
      padding: "0 clamp(20px,5vw,48px) clamp(56px,8vw,100px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 14
    }
  }, "Why volunteer?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.2rem)",
      lineHeight: 0.95,
      color: "#fff",
      margin: "0 0 40px",
      maxWidth: "18ch"
    }
  }, "Your city needs you"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 18
    }
  }, WHY.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.h,
    style: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 13,
      background: w.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: w.icon,
    size: 24,
    color: "#fff",
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "#fff",
      margin: "15px 0 7px"
    }
  }, w.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.82)",
      margin: 0
    }
  }, w.b))))));
}

/* ---------------- How to join (NEW) ---------------- */
function HowToJoin() {
  return /*#__PURE__*/React.createElement("section", {
    id: "join",
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(28px,4vw,56px)",
      alignItems: "center"
    },
    className: "of-grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      minHeight: 340,
      backgroundImage: `url(${PHOTO_PARK})`,
      backgroundSize: "cover",
      backgroundPosition: "center 25%"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--coral-500)",
      marginBottom: 14
    }
  }, "Who we're looking for"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4vw,3rem)",
      lineHeight: 0.96,
      color: "var(--ink-900)",
      margin: "0 0 18px",
      maxWidth: "16ch"
    }
  }, "How to join"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.08rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "0 0 14px"
    }
  }, "You don't need a special background or a specific skill set. You just need to love this city and want to share it!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.08rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "0 0 22px"
    }
  }, "We're looking for Angelenos from all over the City and beyond \u2014 people who know their neighborhoods, speak their community's languages, and are proud of what Los Angeles has to offer. Think of yourself as an ambassador to the City. Beyond that, we're especially seeking people who bring:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ASKS.map(a => /*#__PURE__*/React.createElement("li", {
    key: a.t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      flex: "none",
      background: "var(--surface-sky)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 17,
    color: "var(--blue-600)",
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, a.t)))))));
}

/* ---------------- Four steps to join the crew ---------------- */
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ink-900)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${PHOTO_CREW})`,
      backgroundSize: "cover",
      backgroundPosition: "center 35%",
      opacity: 0.28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 14
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.2rem)",
      lineHeight: 0.95,
      color: "#fff",
      margin: "0 0 44px",
      maxWidth: "20ch"
    }
  }, "Four steps to join the crew"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "rgba(255,255,255,0.97)",
      borderRadius: "var(--radius-lg)",
      padding: "22px",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: s.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff",
    stroke: 2.3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      color: "var(--line-200)"
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 0 6px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-body)",
      margin: 0
    }
  }, s.body)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      color: "rgba(255,255,255,0.75)",
      marginTop: 24,
      maxWidth: "70ch"
    }
  }, "To apply you'll need to be 18 or older, proficient in English, available for 10+ non-consecutive shifts, and present in a host location during the Games.")));
}

/* ---------------- City Volunteers vs LA28 ---------------- */
function Difference() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--coral-500)",
      marginBottom: 14
    }
  }, "Two ways to serve"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4.5vw,3.2rem)",
      lineHeight: 0.95,
      color: "var(--ink-900)",
      margin: "0 0 40px",
      maxWidth: "22ch"
    }
  }, "How are we different from LA28?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, DIFF.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.title,
    style: {
      display: "grid",
      gridTemplateColumns: i % 2 ? "1.3fr 1fr" : "1fr 1.3fr",
      gap: 0,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      background: "var(--surface-card)"
    },
    className: "of-grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 220,
      order: i % 2 ? 2 : 1,
      backgroundImage: `url(${d.photo})`,
      backgroundSize: "cover",
      backgroundPosition: "center 32%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "clamp(22px,3vw,34px)",
      order: i % 2 ? 1 : 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderTop: `5px solid ${d.accent}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: d.accent,
      marginBottom: 8
    }
  }, d.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 900,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)",
      margin: "0 0 10px"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, d.body)))))));
}

/* ---------------- Signup ---------------- */
function Signup() {
  const [done, setDone] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const valid = name.trim() && email.trim();
  return /*#__PURE__*/React.createElement("section", {
    id: "signup",
    style: {
      background: "var(--grad-dusk)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 14
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.2rem,5vw,3.4rem)",
      lineHeight: 0.92,
      color: "#fff",
      margin: "0 0 16px"
    }
  }, "Be first to know when we open"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.08rem",
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.9)",
      margin: "0 auto 30px",
      maxWidth: "48ch"
    }
  }, "Be among the first to hear when applications open in early 2027. Join our interest list today to receive program updates, volunteer opportunities, and ways to get involved before the Games."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(22px,3vw,32px)",
      boxShadow: "var(--shadow-lg)",
      textAlign: "left"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "12px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 70,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 18px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34,
    color: "#fff",
    stroke: 3
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 28,
      lineHeight: 0.95,
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, "You're on the list"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Thanks, ", name.split(" ")[0], "! See you out there, neighbor.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (valid) setDone(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ODS.Input, {
    label: "Name",
    placeholder: "Maya Ortiz",
    value: name,
    onChange: e => setName(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(ODS.Input, {
    label: "Email address",
    type: "email",
    placeholder: "you@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(ODS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    block: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    }),
    style: {
      opacity: valid ? 1 : 0.55,
      pointerEvents: valid ? "auto" : "none",
      marginTop: 2
    }
  }, "Sign me up")))));
}

/* ---------------- Shine LA promo (real brand banner) ---------------- */
function ShinePromo() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SHINE_BANNER,
    alt: "Shine LA \u2014 Join us as we beautify our neighborhoods! Register for the next Shine LA.",
    style: {
      width: "100%",
      display: "block",
      objectFit: "cover"
    }
  })));
}

/* ---------------- Footer w/ city seal ---------------- */
function OFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SiteFooter, {
    go: () => oScroll("signup")
  }), /*#__PURE__*/React.createElement("img", {
    src: CITY_SEAL,
    alt: "City of Los Angeles seal",
    style: {
      position: "absolute",
      right: "clamp(20px,5vw,48px)",
      bottom: 18,
      width: 46,
      height: 46,
      opacity: 0.85
    },
    className: "cv-hide-sm"
  }));
}
function LandingOfficial() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(OHeader, null), /*#__PURE__*/React.createElement(HeroVideo, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(MayorQuote, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(HowToJoin, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Difference, null), /*#__PURE__*/React.createElement(Signup, null), /*#__PURE__*/React.createElement(ShinePromo, null), /*#__PURE__*/React.createElement(OFooter, null));
}
window.LandingOfficial = LandingOfficial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingOfficial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingPhoto.jsx
try { (() => {
// City Volunteers LA 2028 — Photo-driven landing (Editorial layout)
const PDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO = "img_7554-mrfbugxu.jpeg";

/* ---- shared content ---- */
const P_STATS = [{
  v: "5K–10K",
  l: "Volunteers",
  c: "var(--magenta-500)"
}, {
  v: "25,000+",
  l: "Shifts",
  c: "var(--coral-500)"
}, {
  v: "15",
  l: "Council districts",
  c: "var(--gold-600)"
}];
const P_WHY = [{
  icon: "heart",
  color: "var(--magenta-500)",
  h: "Be part of history",
  b: "Step into a once-in-a-generation moment for your city."
}, {
  icon: "graduation-cap",
  color: "#D9481F",
  h: "Build lasting skills",
  b: "Training that outlasts the closing ceremony."
}, {
  icon: "users",
  color: "var(--purple-500)",
  h: "Find your people",
  b: "Find community and join a network of amazing Angelenos."
}, {
  icon: "accessibility",
  color: "#1F8A41",
  h: "A Games for All",
  b: "Find meaningful roles for every ability and skill set."
}];
function pScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 10,
    behavior: "smooth"
  });
}

/* ---- Slim header (no text over hero) ---- */
function PHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      zIndex: 20,
      boxShadow: "0 1px 0 var(--line-200)",
      backgroundColor: "#FFAC00"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "12px clamp(20px,5vw,48px)",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photos/la-city-seal.png",
    alt: "City of Los Angeles seal",
    style: {
      width: 40,
      height: 40,
      flex: "none",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-700)",
      fontSize: 24
    }
  }, "CITY OF LOS ANGELES")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "anton",
      fontSize: 14,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--ink-900)",
      marginTop: 4
    }
  }, "2028 GAMES VOLUNTEERS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photos/mayor-karen-bass-logo.png",
    alt: "Mayor Karen Bass",
    style: {
      height: 40,
      width: "auto",
      display: "block"
    }
  }))));
}

/* ---- 1. Full-bleed hero video (autoplay, muted, loop, no controls) ---- */
function FullBleedVideo() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width: "100%",
      height: "clamp(420px, 78vh, 860px)",
      background: "#000",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${PHOTO})`,
      backgroundSize: "cover",
      backgroundPosition: "center 60%"
    }
  }), /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube-nocookie.com/embed/Bw3qj2MDimQ?autoplay=1&mute=1&loop=1&playlist=Bw3qj2MDimQ&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0",
    title: "City Volunteers 2028 hero video",
    frameBorder: "0",
    allow: "autoplay; encrypted-media; picture-in-picture",
    referrerPolicy: "strict-origin-when-cross-origin",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100vw",
      height: "56.25vw",
      minHeight: "100%",
      minWidth: "177.78vh",
      transform: "translate(-50%,-50%) scale(1.3)",
      border: "none",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }));
}

/* ---- 6. Google Form link ---- */
function SignupMini({
  bg,
  onDark,
  kicker
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "signup",
    style: {
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)",
      backgroundColor: "#1C1AE7"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      textAlign: "center",
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: kicker,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.2rem,5vw,3.4rem)",
      lineHeight: 0.92,
      color: "#FFFFFF",
      margin: "0 0 14px"
    }
  }, "SIGN UP FOR UPDATES"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.08rem",
      lineHeight: 1.6,
      color: "#FFFFFF",
      margin: "0 auto 28px"
    }
  }, "Be among the first to hear when applications open in early 2027. Join our interest list today to receive program updates, volunteer opportunities, and ways to get involved before the games."), /*#__PURE__*/React.createElement("a", {
    href: "https://forms.gle/JZcxauPu1vnmJ35K6",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(PDS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    })
  }, "Sign me up"))));
}

/* ---- Compact banner: applications open early 2027 ---- */
function OpenBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--blue-600)",
      padding: "16px clamp(20px,5vw,48px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      fontSize: "clamp(1rem,2.2vw,1.3rem)",
      color: "#fff",
      textAlign: "center"
    }
  }, "Applications open early 2027 \u2014 be the first to know!"), /*#__PURE__*/React.createElement("a", {
    href: "https://forms.gle/JZcxauPu1vnmJ35K6",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(PDS.Button, {
    variant: "gold",
    pop: true,
    size: "sm"
  }, "Sign up for updates")));
}

/* ---- shared kicker + heading ---- */
function Kicker({
  children,
  color,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color,
      marginBottom: 14,
      textAlign: center ? "center" : "left"
    }
  }, children);
}
function Display({
  children,
  color = "var(--ink-900)",
  size = "clamp(2rem,4.5vw,3.4rem)",
  center,
  max = "20ch",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: size,
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color,
      margin: 0,
      maxWidth: max,
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0,
      textAlign: center ? "center" : "left",
      ...style
    }
  }, children);
}

/* ============================================================
   2. INTRO + BLURB
   ============================================================ */
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(24px,3.5vw,52px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--coral-500)",
    center: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Anton, Arial Narrow, sans-serif",
      textTransform: "uppercase",
      fontSize: 100,
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, "Be the face of Los Angeles"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 24,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "20px auto 0"
    }
  }, "In 2028, LA welcomes the world for the Olympic and Paralympic Games. Thousands of City Volunteers will help - welcoming newcomers, neighbors, and visitors from across the region and the world.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "32px auto 0",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photos/volunteers-sunset.jpg",
    alt: "City Volunteers crew",
    style: {
      width: "100%",
      display: "block",
      objectFit: "cover",
      objectPosition: "center 30%",
      maxHeight: 420,
      paddingBottom: 0,
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      textAlign: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--coral-500)",
    center: true
  }), /*#__PURE__*/React.createElement(Display, {
    center: true,
    size: "clamp(2.4rem,5.5vw,4.2rem)",
    style: {
      fontSize: 48,
      marginTop: 15
    }
  }, "JOIN THE 2028 CREW"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.18rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "20px auto 0"
    }
  }, "The City of Los Angeles is recruiting 5,000 City Volunteers for the 2028 Olympic and Paralympic Games - the warm, knowledgeable face opf the city in public spaces, transit corridors, and neighborhood celebration sites. We bring wayfinding, accessibility support, information, and public joy that makes every visitor feel at home and every Angeleno feel connected to the games.")));
}

/* ============================================================
   5. WHY VOLUNTEER
   ============================================================ */
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#E4F0FF",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--magenta-500)",
    center: true
  }), /*#__PURE__*/React.createElement(Display, {
    center: true,
    max: "16ch",
    color: "#000000"
  }, "WHY VOLUNTEER?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 18,
      marginTop: 44
    }
  }, P_WHY.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.h,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 22px",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 14,
      background: w.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: w.icon,
    size: 25,
    color: "#fff",
    stroke: 2.2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "15px 0 7px"
    }
  }, w.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, w.b))))));
}

/* ---- Full-width photo quote band ---- */
function QuoteBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width: "100%",
      minHeight: "clamp(480px, 82vh, 820px)",
      backgroundImage: "url(assets/photos/mayor-podium-coliseum.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(11,18,48,0) 65%, rgba(11,18,48,0.7) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 920,
      width: "100%",
      margin: "0 auto",
      padding: "clamp(16px,2vw,22px) clamp(24px,4vw,44px)",
      marginBottom: "clamp(20px,3vw,32px)",
      background: "rgba(255,255,255,0.96)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "clamp(1rem,1.8vw,1.2rem)",
      lineHeight: 1.5,
      color: "var(--ink-900)",
      margin: "0 0 10px"
    }
  }, "The 2028 Games are an opportunity to reimagine our infrastructure, strengthen community resilience, and expand opportunity for all Angelenos \u2014 a true 'Games for All'. This is my vision for the 2028 Games ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19.2
    }
  }, "\u2014"), " an LA made better for all Angelenos."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 14,
      color: "var(--blue-700)"
    }
  }, "Mayor Karen Bass")));
}

/* ---- Shine LA promo ---- */
function ShinePromo() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "clamp(28px,4vw,52px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement(Display, {
    max: "18ch"
  }, "Join a Shine LA day"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.05rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "18px 0 0"
    }
  }, "Want to start making an impact today? Join Shine LA, our monthly volunteer initative that helps beautify neighborhoods while building the spirit that will welcome the world in 2028.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photos/shine-la-logo.png",
    alt: "Shine LA",
    style: {
      width: "100%",
      display: "block",
      objectFit: "cover"
    }
  }))));
}
function LandingPhoto() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(PHeader, null), /*#__PURE__*/React.createElement(FullBleedVideo, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(OpenBanner, null), /*#__PURE__*/React.createElement(QuoteBand, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(FourStepsToJoin, {
    bg: "#FFF9F1"
  }), /*#__PURE__*/React.createElement(OpenBanner, null), /*#__PURE__*/React.createElement(HowAreWeDifferent, {
    bg: "#E4F0FF"
  }), /*#__PURE__*/React.createElement(SignupMini, {
    bg: "var(--grad-sunset)",
    kicker: "rgba(11,18,48,0.6)"
  }), /*#__PURE__*/React.createElement(ShinePromo, null));
}
window.LandingPhoto = LandingPhoto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingPhoto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingThemed.jsx
try { (() => {
// City Volunteers LA 2028 — Landing page in 3 distinct styles (live switcher)
const TDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const T_PHOTO = "assets/photos/volunteers-sunset.jpg";

/* ============================================================
   SHARED CONTENT
   ============================================================ */
const T_STATS = [{
  v: "5K–10K",
  l: "Volunteers",
  c: "magenta"
}, {
  v: "25,000+",
  l: "Shifts",
  c: "blue"
}, {
  v: "15",
  l: "Council districts",
  c: "green"
}];
const T_STEPS = [{
  n: "01",
  icon: "sparkles",
  color: "var(--blue-500)",
  title: "Application",
  body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required."
}, {
  n: "02",
  icon: "search",
  color: "var(--purple-500)",
  title: "Vetting",
  body: "We review applications and run a background check once you accept a conditional role offer."
}, {
  n: "03",
  icon: "graduation-cap",
  color: "var(--coral-500)",
  title: "Selection & Onboarding",
  body: "Selected volunteers get an official offer, then complete training built for their role."
}, {
  n: "04",
  icon: "star",
  color: "var(--gold-500)",
  title: "Deployment",
  body: "Pick up your kit and take your post as the face of LA across the city."
}];
const T_DIFF = [{
  tag: "City of LA",
  title: "City Volunteer Program",
  accent: "var(--blue-500)",
  points: [{
    icon: "map-pin",
    t: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts."
  }, {
    icon: "handshake",
    t: "Welcoming, wayfinding, accessibility support and civic energy. Not security or event staff."
  }, {
    icon: "building",
    t: "Run by the City of Los Angeles. Complements — and is separate from — the official Games workforce."
  }]
}, {
  tag: "LA28",
  title: "Games Volunteers",
  accent: "var(--gold-500)",
  points: [{
    icon: "ticket",
    t: "Inside official competition venues and Games operations."
  }, {
    icon: "users",
    t: "Roles defined and managed by the LA28 organizing committee."
  }, {
    icon: "calendar",
    t: "Apply through LA28 — applications open July 14."
  }]
}];
const T_WHY = [{
  icon: "heart",
  color: "var(--magenta-500)",
  h: "Be part of history",
  b: "Step into the heart of a once-in-a-generation moment for your city."
}, {
  icon: "graduation-cap",
  color: "var(--blue-500)",
  h: "Build lasting skills",
  b: "Training and workforce development that outlast the closing ceremony."
}, {
  icon: "users",
  color: "var(--purple-500)",
  h: "Find your people",
  b: "Connect neighbor-to-neighbor and grow new habits of civic service."
}, {
  icon: "accessibility",
  color: "var(--green-500)",
  h: "A Games for All",
  b: "Roles for every ability and priority communities across LA."
}];
const STAT_COLORS = {
  magenta: "var(--magenta-500)",
  blue: "var(--blue-500)",
  green: "var(--green-500)"
};
function tScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 70,
    behavior: "smooth"
  });
}

/* ============================================================
   THEME DEFINITIONS
   ============================================================ */
const THEMES = {
  stadium: {
    label: "Sunset Stadium",
    swatch: "var(--grad-sunset)",
    desc: "Bold · loud · sticker-pop",
    page: "var(--surface-page)",
    fontHead: "var(--font-display)",
    caps: true,
    headTrack: "-0.01em",
    rainbow: true,
    headerBg: "var(--paper-2)",
    sec: {
      blurb: {
        bg: "var(--surface-page)",
        head: "var(--ink-900)",
        body: "var(--text-body)",
        kicker: "var(--blue-600)"
      },
      how: {
        bg: "var(--surface-sky)",
        head: "var(--ink-900)",
        body: "var(--text-body)",
        kicker: "var(--blue-600)"
      },
      diff: {
        bg: "var(--surface-page)",
        head: "var(--ink-900)",
        body: "var(--text-body)",
        kicker: "var(--blue-600)"
      },
      why: {
        bg: "var(--surface-sun)",
        head: "var(--ink-900)",
        body: "var(--text-body)",
        kicker: "var(--gold-600)"
      },
      signup: {
        bg: "var(--grad-dusk)",
        head: "#fff",
        body: "#EDE6FF",
        kicker: "var(--gold-400)",
        onDark: true
      }
    },
    card: "pop"
  },
  civic: {
    label: "Civic Clean",
    swatch: "linear-gradient(120deg,#1A6CE7,#0B3A8C)",
    desc: "Light · editorial · spacious",
    page: "#FFFFFF",
    fontHead: "var(--font-display)",
    caps: true,
    headTrack: "-0.01em",
    rainbow: false,
    headerBg: "#FFFFFF",
    sec: {
      blurb: {
        bg: "#FFFFFF",
        head: "var(--blue-700)",
        body: "var(--text-body)",
        kicker: "var(--blue-500)"
      },
      how: {
        bg: "#FFFFFF",
        head: "var(--blue-700)",
        body: "var(--text-body)",
        kicker: "var(--blue-500)"
      },
      diff: {
        bg: "var(--blue-100)",
        head: "var(--blue-700)",
        body: "var(--text-body)",
        kicker: "var(--blue-500)"
      },
      why: {
        bg: "#FFFFFF",
        head: "var(--blue-700)",
        body: "var(--text-body)",
        kicker: "var(--blue-500)"
      },
      signup: {
        bg: "var(--blue-700)",
        head: "#fff",
        body: "#CFE0FF",
        kicker: "var(--gold-400)",
        onDark: true
      }
    },
    card: "soft"
  },
  carnival: {
    label: "Color Carnival",
    swatch: "var(--grad-rainbow)",
    desc: "Maximal · color-blocked · poster",
    page: "var(--surface-page)",
    fontHead: "var(--font-display)",
    caps: true,
    headTrack: "-0.01em",
    rainbow: true,
    headerBg: "var(--ink-900)",
    headerDark: true,
    sec: {
      blurb: {
        bg: "#FFFFFF",
        head: "var(--ink-900)",
        body: "var(--text-body)",
        kicker: "var(--magenta-500)"
      },
      how: {
        bg: "var(--gold-500)",
        head: "var(--ink-900)",
        body: "rgba(11,18,48,0.78)",
        kicker: "rgba(11,18,48,0.65)",
        onColor: true
      },
      diff: {
        bg: "var(--cyan-400)",
        head: "var(--ink-900)",
        body: "rgba(11,18,48,0.78)",
        kicker: "rgba(11,18,48,0.65)",
        onColor: true
      },
      why: {
        bg: "var(--magenta-500)",
        head: "#fff",
        body: "rgba(255,255,255,0.92)",
        kicker: "var(--gold-200)",
        onDark: true
      },
      signup: {
        bg: "var(--ink-900)",
        head: "#fff",
        body: "#D9E2F5",
        kicker: "var(--gold-400)",
        onDark: true
      }
    },
    card: "flat"
  }
};
function cardStyle(kind, opts = {}) {
  if (kind === "pop") return {
    background: "var(--surface-card)",
    border: "2px solid var(--ink-900)",
    boxShadow: "var(--shadow-pop-sm)",
    borderRadius: "var(--radius-lg)"
  };
  if (kind === "soft") return {
    background: "#fff",
    border: "1px solid var(--line-200)",
    boxShadow: "var(--shadow-sm)",
    borderRadius: "var(--radius-lg)"
  };
  return {
    background: "#fff",
    border: "none",
    boxShadow: "0 12px 30px rgba(11,18,48,0.16)",
    borderRadius: "var(--radius-xl)"
  }; // flat
}

/* ============================================================
   SHARED PIECES
   ============================================================ */
function THead({
  t,
  sec,
  kicker,
  title,
  intro,
  align = "left",
  maxTitle = "18ch"
}) {
  const p = t.sec[sec];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === "center" ? "62ch" : "100%",
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: p.kicker,
      marginBottom: 14
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.fontHead,
      textTransform: t.caps ? "uppercase" : "none",
      fontSize: "clamp(2rem,4.5vw,3.4rem)",
      lineHeight: 0.96,
      letterSpacing: t.headTrack,
      color: p.head,
      margin: 0,
      maxWidth: maxTitle,
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, title), t.id === "civic" && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 4,
      background: "var(--gold-500)",
      borderRadius: 4,
      marginTop: 18
    }
  }), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.12rem",
      lineHeight: 1.65,
      color: p.body,
      marginTop: 18,
      maxWidth: "58ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, intro));
}
function ThemedHeader({
  t
}) {
  const dark = t.headerDark;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: t.headerBg,
      boxShadow: dark ? "none" : "0 1px 0 var(--line-200)"
    }
  }, t.rainbow ? /*#__PURE__*/React.createElement(RainbowBar, {
    height: 6
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "var(--gold-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "12px clamp(20px,5vw,48px)",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, dark ? /*#__PURE__*/React.createElement(WordmarkDark, null) : /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    onClick: e => {
      e.preventDefault();
      tScroll("how");
    },
    className: "cv-hide-sm",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: dark ? "#C7D2EC" : "var(--text-muted)",
      textDecoration: "none"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    onClick: e => {
      e.preventDefault();
      tScroll("why");
    },
    className: "cv-hide-sm",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: dark ? "#C7D2EC" : "var(--text-muted)",
      textDecoration: "none"
    }
  }, "Why volunteer"), /*#__PURE__*/React.createElement(TDS.Button, {
    variant: "gold",
    pop: t.card === "pop" || t.card === "flat",
    size: "sm",
    onClick: () => tScroll("signup")
  }, "Sign up for updates"))));
}
function WordmarkDark() {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)",
      WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)",
      mask: "radial-gradient(circle, transparent 38%, #000 39%)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, "City ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "Volunteers")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#9FB0D6",
      marginTop: 4
    }
  }, "Los Angeles \xB7 LA 2028")));
}

/* ============================================================
   HERO — three variants
   ============================================================ */
function VideoPlayer({
  frame
}) {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: frame,
      boxShadow: "var(--shadow-lg)",
      position: "relative",
      aspectRatio: "16 / 9",
      background: `#000 url(${T_PHOTO}) center/cover`,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: playing ? "rgba(11,18,48,0.12)" : "rgba(11,18,48,0.42)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .3s ease"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    "aria-label": playing ? "Pause" : "Play volunteer film",
    style: {
      width: 82,
      height: 82,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "var(--grad-sunset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
    }
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#fff",
      background: "rgba(11,18,48,0.55)",
      padding: "5px 10px",
      borderRadius: 999
    }
  }, playing ? "Now playing" : "Watch · Why we volunteer", " \xB7 1:24")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: "rgba(255,255,255,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: playing ? "100%" : "0%",
      background: "var(--grad-sunset)",
      transition: playing ? "width 84s linear" : "width .3s ease"
    }
  })));
}
function HeroStadium() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ink-900)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${T_PHOTO})`,
      backgroundSize: "cover",
      backgroundPosition: "center 28%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(11,18,48,0.45) 0%, rgba(11,18,48,0.6) 50%, rgba(11,18,48,0.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-160px",
      top: "-200px",
      width: 520,
      height: 520,
      borderRadius: "50%",
      background: "radial-gradient(circle, transparent 0 46%, rgba(255,45,139,.45) 46% 54%, rgba(255,107,61,.45) 54% 62%, rgba(255,178,0,.45) 62% 70%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px) clamp(48px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 20
    }
  }, "City of Los Angeles \xB7 Olympic & Paralympic Games"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      fontSize: "clamp(2.8rem,7.5vw,6rem)",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      maxWidth: "15ch"
    }
  }, "Be the face of ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-sunset)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Los Angeles")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "clamp(1.05rem,2vw,1.3rem)",
      lineHeight: 1.55,
      color: "#E7EDFA",
      maxWidth: "44ch",
      marginTop: 22
    }
  }, "In 2028, LA welcomes the world. Watch how thousands of City Volunteers will help \u2014 neighbors welcoming neighbors, in every council district."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(VideoPlayer, {
    frame: "2px solid rgba(255,255,255,0.25)"
  }))));
}
function HeroCivic() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#FFFFFF",
      borderBottom: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "clamp(44px,6vw,84px) clamp(20px,5vw,48px)",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "clamp(28px,5vw,64px)",
      alignItems: "center"
    },
    className: "cv-hero-civic"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--blue-500)",
      marginBottom: 20
    }
  }, "City of Los Angeles \xB7 Games 2028"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: "var(--blue-700)",
      margin: 0,
      fontSize: "clamp(2.6rem,5.5vw,4.6rem)",
      lineHeight: 0.92,
      letterSpacing: "-0.01em",
      maxWidth: "13ch"
    }
  }, "Be the face of Los Angeles"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 5,
      background: "var(--gold-500)",
      borderRadius: 5,
      margin: "22px 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "clamp(1.05rem,1.6vw,1.25rem)",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "In 2028, LA welcomes the world. The City is recruiting thousands of volunteers to be its warm, knowledgeable face \u2014 neighbors welcoming neighbors, in every council district."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(TDS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => tScroll("signup"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "Sign up for updates"), /*#__PURE__*/React.createElement(TDS.Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => tScroll("how")
  }, "How it works"))), /*#__PURE__*/React.createElement(VideoPlayer, {
    frame: "1px solid var(--line-200)"
  })));
}
function HeroCarnival() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--blue-500)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-120px",
      bottom: "-260px",
      width: 560,
      height: 560,
      borderRadius: "50%",
      background: "radial-gradient(circle, transparent 0 44%, rgba(255,45,139,.6) 44% 52%, rgba(255,178,0,.6) 52% 60%, rgba(47,208,214,.55) 60% 68%, transparent 68%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-140px",
      top: "-160px",
      width: 360,
      height: 360,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(123,63,242,.55), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "clamp(52px,7vw,96px) clamp(20px,5vw,48px) clamp(44px,6vw,84px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--gold-200)",
      marginBottom: 18
    }
  }, "City of Los Angeles \xB7 Games 2028"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      fontSize: "clamp(3rem,8.5vw,7rem)",
      lineHeight: 0.86,
      letterSpacing: "-0.01em",
      maxWidth: "13ch",
      textShadow: "0 4px 0 rgba(11,18,48,0.18)"
    }
  }, "Be the face of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "L.A.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "clamp(1.05rem,2vw,1.35rem)",
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.95)",
      maxWidth: "44ch",
      marginTop: 22
    }
  }, "In 2028, LA welcomes the world. Thousands of City Volunteers will bring the energy \u2014 neighbors welcoming neighbors, in every council district."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(VideoPlayer, {
    frame: "4px solid #fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: "var(--grad-rainbow)"
    }
  }));
}

/* ============================================================
   SECTIONS
   ============================================================ */
function Blurb({
  t
}) {
  const p = t.sec.blurb;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: p.bg,
      padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "cv-grid-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: p.kicker,
      marginBottom: 14
    }
  }, "The Program"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.fontHead,
      textTransform: t.caps ? "uppercase" : "none",
      fontSize: "clamp(1.8rem,4vw,2.9rem)",
      lineHeight: 0.98,
      letterSpacing: t.headTrack,
      color: p.head,
      margin: "0 0 18px",
      maxWidth: "20ch"
    }
  }, "Neighbors welcoming neighbors"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.15rem",
      lineHeight: 1.65,
      color: p.body,
      margin: 0,
      maxWidth: "56ch"
    }
  }, "The City of Los Angeles is recruiting 5,000\u201310,000 City Volunteers to complement the LA28 Games \u2014 serving as the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites. We provide wayfinding, accessibility support, information, and the civic energy that makes every visitor feel at home. The 2028 Games will be a ", /*#__PURE__*/React.createElement("strong", null, "Games for All"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, T_STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      borderTop: "2px solid var(--line-200)",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.2rem,4vw,3rem)",
      lineHeight: 0.9,
      color: STAT_COLORS[s.c]
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, s.l))))));
}
function HowItWorks({
  t
}) {
  const p = t.sec.how;
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: p.bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(THead, {
    t: t,
    sec: "how",
    kicker: "How it works",
    title: "Four steps to your first shift"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
      marginTop: 44
    }
  }, T_STEPS.map(s => {
    const cs = cardStyle(t.card);
    return /*#__PURE__*/React.createElement("div", {
      key: s.n,
      style: {
        ...cs,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        height: 50,
        borderRadius: t.card === "flat" ? "50%" : 13,
        background: s.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26,
      color: s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff",
      stroke: 2.3
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        color: t.id === "civic" ? "var(--gold-400)" : "var(--line-200)"
      }
    }, s.n)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 900,
        fontSize: 19,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: 0
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, s.body));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      color: p.onColor || p.onDark ? p.body : "var(--text-muted)",
      marginTop: 24,
      maxWidth: "70ch"
    }
  }, "To apply you'll need to be 18 or older, proficient in English, available for 10+ non-consecutive shifts, and present in a host location during the Games.")));
}
function Difference({
  t
}) {
  const p = t.sec.diff;
  const onBlock = p.onColor || p.onDark;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: p.bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(THead, {
    t: t,
    sec: "diff",
    kicker: "Two ways to serve",
    title: "How are we different from LA28?",
    maxTitle: "22ch",
    intro: "The City Volunteer Program and LA28's Games Volunteers are two distinct teams that work side by side. One serves the city; one serves the venues. Many Angelenos apply to both."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22,
      marginTop: 40
    },
    className: "cv-grid-2"
  }, T_DIFF.map((c, ci) => {
    const isSecond = ci === 1;
    const cardBg = t.id === "stadium" && isSecond ? "var(--ink-900)" : "#fff";
    const onCardDark = cardBg === "var(--ink-900)";
    const cs = cardStyle(t.card);
    return /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        ...cs,
        background: cardBg,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: c.accent
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "26px 26px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: c.accent,
        marginBottom: 8
      }
    }, c.tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 900,
        fontSize: 24,
        letterSpacing: "-0.02em",
        color: onCardDark ? "#fff" : "var(--ink-900)",
        margin: "0 0 18px"
      }
    }, c.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, c.points.map((pt, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        flex: "none",
        background: onCardDark ? "rgba(255,255,255,0.1)" : "var(--surface-sky)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: pt.icon,
      size: 17,
      color: c.accent,
      stroke: 2.2
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 14.5,
        lineHeight: 1.5,
        color: onCardDark ? "#D9E2F5" : "var(--text-body)"
      }
    }, pt.t))))));
  }))));
}
function WhyVolunteer({
  t
}) {
  const p = t.sec.why;
  const onBlock = p.onColor || p.onDark;
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: p.bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(THead, {
    t: t,
    sec: "why",
    kicker: "Why volunteer",
    title: "Your city needs you",
    maxTitle: "16ch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 20,
      marginTop: 44
    }
  }, T_WHY.map(w => {
    const cs = cardStyle(t.card === "pop" ? "soft" : t.card);
    const cardBg = onBlock ? "rgba(255,255,255,0.97)" : cs.background;
    return /*#__PURE__*/React.createElement("div", {
      key: w.h,
      style: {
        ...cs,
        background: cardBg,
        padding: "26px 24px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: t.card === "flat" ? "50%" : 14,
        background: w.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: w.icon,
      size: 26,
      color: w.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff",
      stroke: 2.2
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 800,
        fontSize: 18,
        letterSpacing: "-0.01em",
        color: "var(--ink-900)",
        margin: "16px 0 8px"
      }
    }, w.h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, w.b));
  }))));
}
function Signup({
  t
}) {
  const p = t.sec.signup;
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState({
    first: "",
    last: "",
    email: "",
    zip: ""
  });
  const [agree, setAgree] = React.useState(false);
  const set = k => e => setF(s => ({
    ...s,
    [k]: e.target.value
  }));
  const valid = f.first && f.last && f.email && f.zip && agree;
  return /*#__PURE__*/React.createElement("section", {
    id: "signup",
    style: {
      background: p.bg,
      padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "cv-grid-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: p.kicker,
      marginBottom: 14
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.fontHead,
      textTransform: t.caps ? "uppercase" : "none",
      fontSize: "clamp(2.2rem,5vw,3.6rem)",
      lineHeight: 0.92,
      color: p.head,
      margin: "0 0 16px"
    }
  }, "Be first to know when we open"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: p.body,
      margin: 0,
      maxWidth: "40ch"
    }
  }, "Sign up and we'll email you the moment City Volunteer applications go live \u2014 plus updates from across the program.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(24px,3vw,36px)",
      boxShadow: "var(--shadow-lg)"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 38,
    color: "#fff",
    stroke: 3
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 30,
      lineHeight: 0.95,
      color: "var(--ink-900)",
      margin: "0 0 10px"
    }
  }, "You're on the list"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Thanks, ", f.first, "! We'll be in touch the moment applications open. See you out there, neighbor.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (valid) setDone(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TDS.Input, {
    label: "First name",
    placeholder: "Maya",
    value: f.first,
    onChange: set("first"),
    required: true
  }), /*#__PURE__*/React.createElement(TDS.Input, {
    label: "Last name",
    placeholder: "Ortiz",
    value: f.last,
    onChange: set("last"),
    required: true
  })), /*#__PURE__*/React.createElement(TDS.Input, {
    label: "Email address",
    type: "email",
    placeholder: "you@email.com",
    value: f.email,
    onChange: set("email"),
    required: true
  }), /*#__PURE__*/React.createElement(TDS.Input, {
    label: "ZIP code",
    placeholder: "90012",
    value: f.zip,
    onChange: set("zip"),
    required: true,
    style: {
      maxWidth: 160
    }
  }), /*#__PURE__*/React.createElement(TDS.Checkbox, {
    label: "I agree to receive communications from the City Volunteer Program.",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement(TDS.Button, {
    variant: "gold",
    size: "lg",
    pop: true,
    block: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ink-900)"
    }),
    style: {
      opacity: valid ? 1 : 0.55,
      pointerEvents: valid ? "auto" : "none",
      marginTop: 4
    }
  }, "Sign me up"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 12.5,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "We'll only use your info for City Volunteer updates. Unsubscribe anytime.")))));
}

/* ============================================================
   SWITCHER + APP
   ============================================================ */
function StyleSwitcher({
  themeId,
  setThemeId
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: 22,
      transform: "translateX(-50%)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "var(--ink-900)",
      padding: 6,
      borderRadius: 999,
      boxShadow: "0 12px 34px rgba(11,18,48,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#8392B8",
      padding: "0 8px 0 10px"
    }
  }, "Style"), Object.keys(THEMES).map(k => {
    const th = THEMES[k];
    const on = k === themeId;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setThemeId(k),
      title: th.desc,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        cursor: "pointer",
        borderRadius: 999,
        padding: on ? "8px 14px" : "8px 12px",
        background: on ? "#fff" : "transparent",
        transition: "background .2s ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: th.swatch,
        flex: "none",
        boxShadow: on ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.3)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 13,
        color: on ? "var(--ink-900)" : "#C7D2EC",
        whiteSpace: "nowrap"
      }
    }, th.label));
  }));
}
function LandingThemed() {
  const [themeId, setThemeId] = React.useState(() => {
    try {
      return localStorage.getItem("cv-landing-theme") || "stadium";
    } catch (e) {
      return "stadium";
    }
  });
  React.useEffect(() => {
    try {
      localStorage.setItem("cv-landing-theme", themeId);
    } catch (e) {}
  }, [themeId]);
  const t = {
    ...THEMES[themeId],
    id: themeId
  };
  const Hero = themeId === "civic" ? HeroCivic : themeId === "carnival" ? HeroCarnival : HeroStadium;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: t.page
    }
  }, /*#__PURE__*/React.createElement(ThemedHeader, {
    t: t
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Blurb, {
    t: t
  }), /*#__PURE__*/React.createElement(HowItWorks, {
    t: t
  }), /*#__PURE__*/React.createElement(Difference, {
    t: t
  }), /*#__PURE__*/React.createElement(WhyVolunteer, {
    t: t
  }), /*#__PURE__*/React.createElement(Signup, {
    t: t
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    go: () => tScroll("signup")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84
    }
  }), /*#__PURE__*/React.createElement(StyleSwitcher, {
    themeId: themeId,
    setThemeId: setThemeId
  }));
}
window.LandingThemed = LandingThemed;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingThemed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RolesScreen.jsx
try { (() => {
// City Volunteers LA 2028 — Roles browser screen
const RolesDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const ALL_ROLES = [{
  title: "Transit Wayfinder",
  cat: "Wayfinding",
  phase: "Olympic Games",
  loc: "Greater Los Angeles",
  status: {
    tone: "green",
    label: "Open",
    dot: true
  },
  icon: "map-pin",
  body: "Direct arriving crowds from Metro stations to venue gates."
}, {
  title: "Celebration Site Host",
  cat: "Hospitality",
  phase: "Olympic Games",
  loc: "All council districts",
  status: {
    tone: "gold",
    label: "Filling fast",
    solid: true
  },
  icon: "megaphone",
  body: "Welcome neighbors at watch-party and festival activations."
}, {
  title: "Accessibility Guide",
  cat: "Accessibility",
  phase: "Paralympic Games",
  loc: "Greater Los Angeles",
  status: {
    tone: "green",
    label: "Open",
    dot: true
  },
  icon: "accessibility",
  body: "Support visitors of all abilities with mobility and sensory needs."
}, {
  title: "City Media Center Aide",
  cat: "Media",
  phase: "Olympic Games",
  loc: "Downtown LA",
  status: {
    tone: "blue",
    label: "Limited",
    dot: true
  },
  icon: "building",
  body: "Welcome press and storytellers covering the Games."
}, {
  title: "Accreditation Assistant",
  cat: "Operations",
  phase: "Olympic Games",
  loc: "Greater Los Angeles",
  status: {
    tone: "green",
    label: "Open",
    dot: true
  },
  icon: "ticket",
  body: "Credential and check in the city volunteer workforce."
}, {
  title: "Neighborhood Greeter",
  cat: "Hospitality",
  phase: "Year-round",
  loc: "All council districts",
  status: {
    tone: "green",
    label: "Open",
    dot: true
  },
  icon: "heart",
  body: "Build third spaces for connection in your own community."
}, {
  title: "Language Liaison",
  cat: "Wayfinding",
  phase: "Olympic Games",
  loc: "LAX & transit hubs",
  status: {
    tone: "gold",
    label: "Filling fast",
    solid: true
  },
  icon: "languages",
  body: "Help international visitors in one of LA's 200+ languages."
}, {
  title: "Youth Corps Lead",
  cat: "Operations",
  phase: "Year-round",
  loc: "Priority communities",
  status: {
    tone: "purple",
    label: "Leadership",
    dot: true
  },
  icon: "users",
  body: "Mentor foster-youth and college-corps volunteers."
}];
const FILTERS = ["Wayfinding", "Hospitality", "Accessibility", "Media", "Operations"];
function RoleCard({
  r,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--line-200)",
      borderRadius: "var(--radius-lg)",
      padding: "22px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 13,
      background: "var(--surface-sky)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 24,
    color: "var(--blue-600)",
    stroke: 2.2
  })), /*#__PURE__*/React.createElement(RolesDS.Badge, {
    tone: r.status.tone,
    solid: r.status.solid,
    dot: r.status.dot
  }, r.status.label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)",
      margin: "0 0 6px"
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, r.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.04em",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--text-muted)"
  }), r.loc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: "var(--text-muted)"
  }), r.phase)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-100)",
      paddingTop: 14,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(RolesDS.Button, {
    variant: "primary",
    size: "sm",
    block: true,
    onClick: () => go("apply"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: "#fff"
    })
  }, "Apply for this role")));
}
function RolesScreen({
  go
}) {
  const [phase, setPhase] = React.useState("Olympic Games");
  const [active, setActive] = React.useState([]);
  const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  const shown = ALL_ROLES.filter(r => r.phase === phase && (active.length === 0 || active.includes(r.cat)));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sky)",
      padding: "clamp(48px,6vw,80px) clamp(20px,5vw,48px) clamp(32px,4vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--blue-600)",
      marginBottom: 14
    }
  }, "Volunteer Roles"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,6vw,4.5rem)",
      lineHeight: 0.92,
      color: "var(--ink-900)",
      margin: 0
    }
  }, "Find your shift"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "52ch",
      marginTop: 16
    }
  }, "We welcome people of all abilities, including those with disabilities. Be 18+, available for 10 non-consecutive shifts, and ready to welcome the world."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(28px,4vw,44px) clamp(20px,5vw,48px) clamp(64px,8vw,104px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(RolesDS.Tabs, {
    tabs: ["Olympic Games", "Paralympic Games", "Year-round"],
    value: phase,
    onChange: setPhase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      margin: "26px 0 32px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginRight: 4
    }
  }, "Filter"), FILTERS.map(f => /*#__PURE__*/React.createElement(RolesDS.Tag, {
    key: f,
    selected: active.includes(f),
    onClick: () => toggle(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
      gap: 22
    }
  }, shown.map(r => /*#__PURE__*/React.createElement(RoleCard, {
    key: r.title,
    r: r,
    go: go
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 0",
      fontFamily: "var(--font-text)",
      color: "var(--text-muted)"
    }
  }, "No roles match those filters yet \u2014 check back soon."))));
}
window.RolesScreen = RolesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RolesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// City Volunteers LA 2028 — Site chrome (header, footer, rainbow bar, wordmark)
const {
  Button: CvButton
} = window.CityVolunteersLA2028DesignSystem_ea1102;
function RainbowBar({
  height = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: "var(--grad-rainbow)",
      width: "100%"
    }
  });
}
function Wordmark({
  onClick,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--grad-sunset)",
      flex: "none",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)",
      WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)",
      mask: "radial-gradient(circle, transparent 38%, #000 39%)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-500)",
      fontSize: 24
    }
  }, "CITY OF LOS ANGELES")), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "anton",
      fontSize: 14,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#FF3E53",
      marginTop: 4
    }
  }, "2028 GAMES VOLUNTEERS")));
}
const NAV = [{
  id: "home",
  label: "The Mission"
}, {
  id: "roles",
  label: "Roles"
}, {
  id: "journey",
  label: "Your Journey"
}];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--paper-2)",
      boxShadow: "0 1px 0 var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement(RainbowBar, {
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "14px clamp(20px,5vw,48px)",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      marginLeft: 20
    },
    className: "cv-desktop-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: route === n.id ? "var(--ink-900)" : "var(--text-muted)",
      paddingBottom: 2,
      borderBottom: route === n.id ? "2px solid var(--blue-500)" : "2px solid transparent"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18
  }), " EN"), /*#__PURE__*/React.createElement(CvButton, {
    variant: "gold",
    pop: true,
    size: "sm",
    onClick: () => go("apply")
  }, "Become a Volunteer"))));
}
const FOOTER_COLS = [{
  h: "The Program",
  links: ["The Mission", "Volunteer Missions", "Priority Communities", "Our Partners"]
}, {
  h: "Get Involved",
  links: ["Become a Volunteer", "Browse Roles", "Your Journey", "Volunteer Stories"]
}, {
  h: "City of LA",
  links: ["Mayor's Office", "Council Districts", "Accessibility", "Contact"]
}];
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "#fff",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement(RainbowBar, {
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "56px clamp(20px,5vw,48px) 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32
    },
    className: "cv-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontSize: 24,
      lineHeight: 0.95
    }
  }, "City ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "Volunteers")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--blue-300)",
      maxWidth: "32ch",
      marginTop: 14
    }
  }, "Building a generation of civic commitment \u2014 one welcome, one direction, one connection at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(CvButton, {
    variant: "gold",
    size: "sm",
    pop: true,
    onClick: () => go("apply")
  }, "Become a Volunteer"))), FOOTER_COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#D9E2F5",
      textDecoration: "none",
      fontFamily: "var(--font-text)",
      fontSize: 14.5
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "20px clamp(20px,5vw,48px)",
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.06em",
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2028 CITY OF LOS ANGELES \xB7 CITY VOLUNTEER PROGRAM"), /*#__PURE__*/React.createElement("span", null, "A GAMES FOR ALL"))));
}
Object.assign(window, {
  RainbowBar,
  Wordmark,
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
