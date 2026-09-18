import type * as React from 'react';

export interface SymbolProps {
  /** Accessible name for the `<svg>`; replaces the `<title>`-based `aria-labelledby`. */
  'aria-label'?: string;
  className?: string;
  /** Overrides the default SVG `<desc>` text. */
  description?: string;
  height?: number | string;
  style?: React.CSSProperties;
  /** Overrides the default SVG `<title>` text (used by screen readers). */
  title?: string;
  width?: number | string;
}
