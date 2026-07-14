import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface TabsProps {
  /** Array of strings or {value,label}. */
  tabs: Array<string | TabItem>;
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** @default "underline" */
  variant?: "underline" | "pill";
  style?: React.CSSProperties;
}

/** Tab navigation — underline bar or pill segmented control. */
export function Tabs(props: TabsProps): JSX.Element;
