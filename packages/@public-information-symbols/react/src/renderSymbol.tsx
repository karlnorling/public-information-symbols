import * as React from 'react';
import { renderSvg } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import type { SymbolProps } from './SymbolPropsBase';

/** Returns an id that is unique per component instance and stable across SSR hydration. */
export const useSymbolUid = (): string => `pi${React.useId()}`;

/** Renders a symbol's SVG inside a layout-transparent `<span>`. */
export const renderSymbol = (
  parts: SvgParts,
  defaultTitle: string,
  defaultDescription: string,
  { 'aria-label': ariaLabel, className, description, height, style, title, width }: SymbolProps,
  uid: string,
): React.ReactElement => (
  <span
    className={className}
    dangerouslySetInnerHTML={{
      __html: renderSvg(parts, {
        ariaLabel,
        description: description ?? defaultDescription,
        height,
        title: title ?? defaultTitle,
        uid,
        width,
      }),
    }}
    style={{ display: 'contents', ...style }}
  />
);
