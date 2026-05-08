// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M154.57 50.479h52.917v52.917H154.57z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-154.57 -50.479)"/><path d="M165.503 60.336v.725h.424v21.777h-2.35v10.7h14.093v-4.42a3.35 3.35 0 0 1 3.359-3.358 3.35 3.35 0 0 1 3.358 3.359v4.42h14.092V82.837h-2.35v-2.4l-15.655-2.37-13.346 2.174V68.93c.415-.223.946-.461 1.342-.478 2.049-.083 3.571 2.083 5.728 2.069 1.15-.007 1.714-.212 1.714-.212v-6.294s-.46.232-1.838.212c-1.297-.018-3.158-1.955-5.339-2.068-.41-.022-1.097.234-1.607.454v-1.552h.425v-.725z" style="display:inline;fill:#000;stroke-width:.799999;stroke-linecap:round" transform="translate(-154.57 -50.479)"/>`;
const _DefaultDesc = `Embassy`;
const _DefaultTitle = 'Embassy';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf070Embassy = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-070-embassy`;
    const titleId = `pi-title-pf-070-embassy`;
    const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;
    const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;
    const resolvedTitle = title ?? _DefaultTitle;
    const resolvedDesc = description ?? _DefaultDesc;
    const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
    return (
      <span
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
        style={{ display: 'contents', ...style }}
      />
    );
  },
);
Pf070Embassy.displayName = 'Pf070Embassy';
