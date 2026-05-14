// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M118.93 57.833h52.917v52.917H118.93z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-118.93 -57.833)"/><path d="m145.272 66.699-13.935 8.047a1.7 1.7 0 0 0-.405.337h-3.788v3.395h36.489v-3.395h-3.91a1.7 1.7 0 0 0-.283-.204zm0 3.92 7.734 4.464H137.54zm-15.911 9.101v1.6c.44-.042.984.024 1.25.35.258.356.22.933.2 1.45l-.55 14.1h-1.2v1.951h6.757v-1.95h-1.2l-.55-14.1c-.022-.518-.059-1.095.2-1.45.265-.327.808-.393 1.25-.351v-1.6h-3.601zm8.633 0v1.6c.44-.042.985.024 1.25.35.258.356.22.933.2 1.45l-.55 14.1h-1.2v1.951h6.757v-1.95h-1.2l-.55-14.1c-.022-.518-.059-1.095.2-1.45.265-.327.808-.393 1.25-.351v-1.6h-3.601zm8.633 0v1.6c.44-.042.985.024 1.25.35.258.356.22.933.2 1.45l-.55 14.1h-1.2v1.951h6.757v-1.95h-1.2l-.55-14.1c-.022-.518-.059-1.095.2-1.45.265-.327.808-.393 1.25-.351v-1.6h-3.601zm8.633 0v1.6c.44-.042.985.024 1.25.35.258.356.22.933.2 1.45l-.55 14.1h-1.2v1.951h6.757v-1.95h-1.2l-.55-14.1c-.022-.518-.059-1.095.2-1.45.265-.327.808-.393 1.25-.351v-1.6h-3.601zm-28.139 20.75v1.414h36.535v-1.414z" style="fill:#000;stroke-width:1.7;stroke-linecap:round" transform="translate(-118.93 -57.833)"/>`;
const _DefaultDesc = `Museum`;
const _DefaultTitle = 'Museum';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf054Museum = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-054-museum`;
    const titleId = `pi-title-pf-054-museum`;
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
Pf054Museum.displayName = 'Pf054Museum';
