import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** Color tone. @default "blue" */
  tone?: "blue" | "gold" | "green" | "magenta" | "purple" | "neutral";
  /** Solid fill instead of soft tint. @default false */
  solid?: boolean;
  /** Leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small uppercase status / category pill in mono type. */
export function Badge(props: BadgeProps): JSX.Element;
