// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M409.143 115.11h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-409.143 -115.11)"/><path d="M429.507 123.583c-.495-.818-1.091-1.59-1.744-1.977-.711-.42-1.697-.109-2.475.172-1.178.424-2.774.97-3.05 2.192-.43 1.914-.597 6.202-.005 9.372 2.186 9.42 7.194 18.02 14.168 23.853 2.5 2.036 6.346 3.942 8.233 4.478 1.204.343 2.447-.798 3.384-1.629.618-.548 1.364-1.265 1.334-2.091-.062-1.732-2.033-4.174-2.61-4.889-.335-.414-2.34-3.074-3.944-3.734-1.743-.574-3.64 2.66-4.117 2.026-3.597-5.88-6.81-11.225-10.23-17.223-.33-.722 3.418-.84 3.748-2.646.188-1.724-1.188-4.757-1.392-5.25-.198-.477-.665-1.603-1.3-2.654" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.9;stroke-opacity:1" transform="translate(-409.143 -115.11)"/></g>`;
const _DefaultDesc = `Telephone`;
const _DefaultTitle = 'Telephone';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf017Telephone = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-017-telephone`;
    const titleId = `pi-title-pf-017-telephone`;
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
Pf017Telephone.displayName = 'Pf017Telephone';
