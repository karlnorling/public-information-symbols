// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M72.542 36.902h52.917v52.917H72.542z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-72.542 -36.902)"/><path d="M85.139 46.378a3.064 3.064 0 1 0 2.924 3.976h.373v.245a.548.548 0 1 0 1.1 0v-.245h.654l.725-.819 1.1.819.7-.795.936.842.795-.795.96.795.77-.702-.864-1.356h-5.777v-.083a.549.549 0 1 0-1.099 0v.083h-.438a3.06 3.06 0 0 0-2.86-1.965m-1.286 2.128a.935.935 0 1 1 0 1.871.935.935 0 0 1 0-1.87m10.442 10.129c-1.291 0-1.994 1.104-2.346 2.346L90.382 66.5h-.698a1.82 1.82 0 0 0-1.825 1.826v6.696c0 1.011.814 1.826 1.825 1.826h.63q-.025.321-.026.705v1.183c0 .89.105 1.607.237 1.607h2.738c.132 0 .237-.717.237-1.607v-1.183q-.001-.384-.025-.705h16.834q-.025.321-.025.705v1.183c0 .89.105 1.607.236 1.607h2.74c.13 0 .236-.717.236-1.607v-1.183q-.001-.384-.026-.705h.629a1.82 1.82 0 0 0 1.826-1.826v-6.696A1.82 1.82 0 0 0 114.1 66.5h-.698l-1.566-5.518c-.353-1.242-1.055-2.346-2.346-2.346zm0 1.037h15.194c.734 0 1.109.603 1.31 1.31l1.565 5.517H91.419l1.566-5.518c.2-.706.575-1.309 1.31-1.309m-1.166 8.525a2.606 2.606 0 1 1-.001 5.212 2.606 2.606 0 0 1 0-5.212m17.526 0a2.606 2.606 0 1 1 0 5.212 2.606 2.606 0 0 1 0-5.212" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.1335;stroke-opacity:1" transform="translate(-72.542 -36.902)"/>`;
const _DefaultDesc = `Rent-a-car, or Car rental/hire`;
const _DefaultTitle = 'Rent-a-car, or Car rental/hire';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf009RentACarOrCarRentalHire = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-009-rent-a-car-or-car-rental-hire`;
    const titleId = `pi-title-tf-009-rent-a-car-or-car-rental-hire`;
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
Tf009RentACarOrCarRentalHire.displayName = 'Tf009RentACarOrCarRentalHire';
