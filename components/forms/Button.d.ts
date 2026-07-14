import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "gold" | "dark" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Pill (default) or rounded-rect. @default "pill" */
  shape?: "pill" | "rounded";
  /** Hard "sticker" drop shadow that presses on click. @default false */
  pop?: boolean;
  /** Full-width. @default false */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Pill-shaped civic call-to-action button.
 *
 * @startingPoint section="Forms" subtitle="Civic CTA button — 5 variants, pop shadow" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
