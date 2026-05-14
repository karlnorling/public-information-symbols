// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M475.93 121.427h52.917v52.917H475.93z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-475.93 -121.427)"/><path d="M512.67 133.122v23.02h-26.344a.66.66 0 0 0-.662.66.66.66 0 0 0 .662.662h27.667v-23.019h4.458a.66.66 0 0 0 .662-.661.66.66 0 0 0-.662-.662h-5.093zm-14.57 4.051c-.69 0-1.245.556-1.245 1.246v1.596h-5.067v15.166h15.537v-15.166h-5.066v-1.596c0-.69-.556-1.246-1.246-1.246zm.547.972h1.82c.431 0 .779.347.779.778v1.092h-3.378v-1.092c0-.431.348-.778.779-.778m-8.674 1.87c-.926 0-1.67.746-1.67 1.672v11.822c0 .926.744 1.672 1.67 1.672h.295v-15.166zm18.872 0v15.166h.295c.926 0 1.672-.746 1.672-1.672v-11.822c0-.926-.746-1.672-1.672-1.672zm-17.55 18.705a1.964 1.964 0 0 0-1.963 1.964 1.964 1.964 0 0 0 1.964 1.964 1.964 1.964 0 0 0 1.964-1.964 1.964 1.964 0 0 0-1.964-1.964m17.166 0a1.964 1.964 0 0 0-1.964 1.964 1.964 1.964 0 0 0 1.964 1.964 1.964 1.964 0 0 0 1.965-1.964 1.964 1.964 0 0 0-1.965-1.964" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.34612;stroke-opacity:1" transform="translate(-475.93 -121.427)"/></g>`;
const _DefaultDesc = `Baggage trolleys or carts`;
const _DefaultTitle = 'Baggage trolleys or carts';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf018BaggageTrolleysOrCarts = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-018-baggage-trolleys-or-carts`;
    const titleId = `pi-title-pf-018-baggage-trolleys-or-carts`;
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
Pf018BaggageTrolleysOrCarts.displayName = 'Pf018BaggageTrolleysOrCarts';
