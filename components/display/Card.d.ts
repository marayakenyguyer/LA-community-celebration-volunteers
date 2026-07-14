import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Mono uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Image URL for a cover banner. */
  image?: string;
  /** Top accent bar. @default "none" */
  accent?: "none" | "blue" | "gold" | "magenta" | "green" | "purple" | "rainbow" | "sunset";
  /** Hard ink-outlined sticker look. @default false */
  pop?: boolean;
  /** Lift on hover. @default false */
  interactive?: boolean;
  style?: React.CSSProperties;
}

/**
 * Flexible content card with optional cover image, accent bar and pop shadow.
 *
 * @startingPoint section="Display" subtitle="Content card with accent bar + pop" viewport="700x360"
 */
export function Card(props: CardProps): JSX.Element;
