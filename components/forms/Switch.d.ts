import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  /** On-state color. @default "blue" */
  accent?: "blue" | "gold";
  disabled?: boolean;
  id?: string;
}

/** Pill toggle switch with a spring-eased knob. */
export function Switch(props: SwitchProps): JSX.Element;
