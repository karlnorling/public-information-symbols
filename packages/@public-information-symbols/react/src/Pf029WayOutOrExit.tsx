// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M127.376 103.974h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-127.376 -103.974)"/><path d="M136.454 115.068v2.618H161.9v-2.618zm17.036 6.853 5.192 5.192h-15.996v6.639h15.996l-5.192 5.191h8.746l8.978-8.51-8.978-8.512zm-17.036 21.256v2.62H161.9v-2.62z" style="stroke-width:1.5" transform="translate(-127.376 -103.974)"/>`;
const _DefaultDesc = `Way out or Exit`;
const _DefaultTitle = 'Way out or Exit';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf029WayOutOrExit = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-029-way-out-or-exit`;
    const titleId = `pi-title-pf-029-way-out-or-exit`;
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
Pf029WayOutOrExit.displayName = 'Pf029WayOutOrExit';
