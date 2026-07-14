import * as React from "react";

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  id?: string;
}

/** Square checkbox with bold ink outline; fills civic blue when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;
