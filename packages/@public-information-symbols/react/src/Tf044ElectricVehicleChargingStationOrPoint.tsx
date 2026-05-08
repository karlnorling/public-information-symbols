// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M120.837 104.662h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-120.837 -104.662)"/><path d="M159.358 109.462a.644.644 0 0 0-.646.645v3.474h-1.57v4.216l3.095 3.109V144.9c0 .829-.635 1.463-1.463 1.463a1.44 1.44 0 0 1-1.465-1.463v-15.4c0-1.72-1.457-3.398-3.646-3.648v-13.188c0-.695-.56-1.256-1.255-1.256H135.45c-.695 0-1.255.56-1.255 1.256v37.011h-4.898v3.103h29.263v-3.103h-4.897v-21.591c.78.21 1.646.741 1.646 1.553V144.9a3.48 3.48 0 0 0 3.465 3.463 3.477 3.477 0 0 0 3.463-3.463v-24l3.057-3.07v-4.217h-1.57v-3.506a.644.644 0 0 0-.646-.645.643.643 0 0 0-.645.645v3.506h-.516v-.032h-1.915v-3.474a.643.643 0 0 0-.644-.645m-22.03 3.975h13.202a.66.66 0 0 1 .662.663v8.078a.66.66 0 0 1-.662.662h-13.202a.66.66 0 0 1-.662-.662V114.1a.66.66 0 0 1 .662-.663m9.939 13.457-3.59 7.665 6.267-.29-9.354 10.448 3.59-7.666-6.266.29z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.8" transform="translate(-120.837 -104.662)"/>`;
const _DefaultDesc = `Electric vehicle charging station or point`;
const _DefaultTitle = "Electric vehicle charging station or point";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf044ElectricVehicleChargingStationOrPoint = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-044-electric-vehicle-charging-station-or-point`;
    const titleId = `pi-title-tf-044-electric-vehicle-charging-station-or-point`;
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
        style={{ display: "contents", ...style }}
      />
    );
  },
);
Tf044ElectricVehicleChargingStationOrPoint.displayName =
  "Tf044ElectricVehicleChargingStationOrPoint";
