import * as React from "react";

export interface AvatarProps {
  /** Image URL; falls back to initials from `name`. */
  src?: string;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** Wrap in the rainbow gradient ring. @default false */
  ring?: boolean;
  /** Initials background when no image. @default "blue" */
  tone?: "blue" | "gold" | "magenta" | "green" | "purple";
  style?: React.CSSProperties;
}

/** Circular avatar with image or auto-initials and optional rainbow ring. */
export function Avatar(props: AvatarProps): JSX.Element;
