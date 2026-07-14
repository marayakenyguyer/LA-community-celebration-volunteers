import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  hint?: string;
  /** Array of strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  id?: string;
}

/** Styled native dropdown with custom chevron and blue focus ring. */
export function Select(props: SelectProps): JSX.Element;
