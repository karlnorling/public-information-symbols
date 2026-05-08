// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M170.394 162.135h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-170.394 -162.135)"/><path d="M191.293 172.985a2.829 2.829 0 1 0 0 5.658 2.829 2.829 0 0 0 0-5.658m.313 6.508a3.5 3.5 0 0 0-.702.055 3.46 3.46 0 0 0-2.801 4.029l1.437 7.999c.354 1.901 1.416 3.03 3.563 3.014h6.074l.6 7.938c.072.966.9 1.687 1.857 1.616a1.737 1.737 0 0 0 1.598-1.873l-.803-10.798a1.736 1.736 0 0 0-1.85-1.616 1.8 1.8 0 0 0-.419-.05h-3.888l-.825-4.592 4.91-.002c.589-.004 1.4-.48 1.384-1.384-.012-.767-.549-1.385-1.384-1.385h-4.136c-1.278-1.133-2.388-2.935-4.615-2.951m12.704 3.86a2.5 2.5 0 0 0-1.503.51c-.461.361-.785.94-.804 1.643v1.291a.45.45 0 0 0 .45.452.45.45 0 0 0 .45-.452v-1.267c.011-.457.188-.746.458-.957.27-.212.652-.328 1.035-.319.384.01.757.142 1.016.372.26.23.429.548.42 1.05v18.525h.9v-18.507c.013-.734-.278-1.345-.723-1.74s-1.02-.586-1.591-.6zm-17.337 12.385v1.703h10.251v-1.703z" style="fill:#000;fill-opacity:1;stroke-width:1.2;stroke-linecap:round" transform="translate(-170.394 -162.135)"/>`;
const _DefaultDesc = `Priority seats for elderly people`;
const _DefaultTitle = 'Priority seats for elderly people';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ac017PrioritySeatsForElderlyPeople = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-017-priority-seats-for-elderly-people`;
    const titleId = `pi-title-ac-017-priority-seats-for-elderly-people`;
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
Ac017PrioritySeatsForElderlyPeople.displayName = 'Ac017PrioritySeatsForElderlyPeople';
