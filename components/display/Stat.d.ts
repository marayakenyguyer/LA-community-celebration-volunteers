import * as React from "react";

export interface StatProps {
  /** The big number, e.g. "25,000+" or "5K–10K". */
  value: React.ReactNode;
  /** Mono uppercase caption below. */
  label: React.ReactNode;
  /** Number color. @default "blue" */
  accent?: "blue" | "gold" | "magenta" | "green" | "purple" | "ink";
  /** @default "left" */
  align?: "left" | "center";
  /** Fill the number with the sunset gradient. @default false */
  gradient?: boolean;
  style?: React.CSSProperties;
}

/**
 * Oversized condensed metric with a mono label — the mission-stat look.
 *
 * @startingPoint section="Display" subtitle="Big mission metric block" viewport="700x260"
 */
export function Stat(props: StatProps): JSX.Element;
