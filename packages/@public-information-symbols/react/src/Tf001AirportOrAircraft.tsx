// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M200.393 127.981h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-200.393 -127.981)"/><path d="M225.895 136.523v.026c-.826.907-1.382 2.814-1.41 4.109l-.378 10.766-13.7 9.6.045 1.24c.034.93.24 1.214 1.37 1.023l12.585-3.563.3 6.8-5.695 3.9v2.418l7.84-2.1 7.839 2.1v-2.417l-5.696-3.9.3-6.8 12.585 3.562c1.13.19 1.337-.094 1.37-1.023l.046-1.24-13.7-9.6-.379-10.766c-.027-1.295-.583-3.202-1.41-4.109v-.026c-.324-.337-.638-.485-.955-.485-.318 0-.633.147-.957.485" style="fill:#000;stroke-width:.7" transform="translate(-200.393 -127.981)"/>`;
const _DefaultDesc = `Airport, or Aircraft`;
const _DefaultTitle = 'Airport, or Aircraft';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf001AirportOrAircraft = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-001-airport-or-aircraft`;
    const titleId = `pi-title-tf-001-airport-or-aircraft`;
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
Tf001AirportOrAircraft.displayName = 'Tf001AirportOrAircraft';
