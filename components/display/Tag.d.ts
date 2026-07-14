import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  /** Selected (filled) state. @default false */
  selected?: boolean;
  onClick?: () => void;
  /** Show a removal "×"; called when clicked. */
  onRemove?: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Outlined, selectable filter/role chip; optionally removable. */
export function Tag(props: TagProps): JSX.Element;
