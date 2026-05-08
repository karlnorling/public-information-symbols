// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M89.513 90.644h52.917v52.917H89.513z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-89.513 -90.644)"/><path d="M98.315 107.745a1.69 1.69 0 0 0-1.695 1.694v11.962c0 .939.756 1.695 1.695 1.695h1.343a4.844 4.844 0 0 1 4.833-4.66 4.844 4.844 0 0 1 4.834 4.66h12.997a4.844 4.844 0 0 1 4.833-4.66 4.844 4.844 0 0 1 4.833 4.66h1.64a1.69 1.69 0 0 0 1.694-1.695v-11.962a1.69 1.69 0 0 0-1.694-1.694zm.201 2.166h6.971c.224 0 .404.18.404.404v4.92c0 .224-.18.404-.404.404h-6.97a.403.403 0 0 1-.405-.404v-4.92c0-.224.18-.404.404-.404m9.217 0h6.97c.224 0 .405.18.405.404v4.92c0 .224-.18.404-.404.404h-6.971a.403.403 0 0 1-.404-.404v-4.92c0-.224.18-.404.404-.404m9.216 0h6.971c.224 0 .404.18.404.404v4.92c0 .224-.18.404-.404.404h-6.97a.403.403 0 0 1-.405-.404v-4.92c0-.224.18-.404.404-.404m9.217 0h6.97c.224 0 .405.18.405.404v4.92c0 .224-.18.404-.404.404h-6.971a.403.403 0 0 1-.404-.404v-4.92c0-.224.18-.404.404-.404m-21.675 10.186a3.18 3.18 0 0 0-3.181 3.182 3.18 3.18 0 0 0 3.181 3.182 3.18 3.18 0 0 0 3.182-3.182 3.18 3.18 0 0 0-3.182-3.182m22.664 0a3.18 3.18 0 0 0-3.182 3.182 3.18 3.18 0 0 0 3.182 3.182 3.18 3.18 0 0 0 3.183-3.182 3.18 3.18 0 0 0-3.183-3.182" style="display:inline;fill:#000;stroke-width:.499187" transform="translate(-89.513 -90.644)"/>`;
const _DefaultDesc = `Bus station, or Bus stop, or Buses`;
const _DefaultTitle = 'Bus station, or Bus stop, or Buses';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf006BusStationOrBusStopOrBuses = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-006-bus-station-or-bus-stop-or-buses`;
    const titleId = `pi-title-tf-006-bus-station-or-bus-stop-or-buses`;
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
Tf006BusStationOrBusStopOrBuses.displayName = 'Tf006BusStationOrBusStopOrBuses';
