import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the field red and replaces hint. */
  error?: string;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Labeled text input with civic-blue focus ring and error state. */
export function Input(props: InputProps): JSX.Element;
