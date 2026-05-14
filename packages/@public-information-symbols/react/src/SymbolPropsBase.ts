import type * as React from 'react';

export interface SymbolProps {
  /** Accessible label that overrides the default aria-label on the wrapping span. */
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
