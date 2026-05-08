// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M151.671 105.541h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-151.67 -105.541)"/><path d="M158.485 111.857v26.151h3.95v-9.502h5.554c4.578 0 8.326-3.747 8.326-8.325s-3.748-8.324-8.326-8.324h-6.372zm3.95 3.946h5.554c2.46 0 4.379 1.918 4.379 4.378s-1.919 4.38-4.38 4.38h-5.553zm14.2 15.128c-1.26 0-1.947 1.08-2.292 2.293l-1.53 5.392h-.682a1.78 1.78 0 0 0-1.785 1.785v6.542a1.78 1.78 0 0 0 1.785 1.785h.614q-.024.314-.025.689v1.156c0 .87.104 1.57.232 1.57h2.676c.128 0 .231-.7.231-1.57v-1.156q-.001-.374-.025-.689h16.451q-.024.314-.025.689v1.156c0 .87.103 1.57.231 1.57h2.677c.128 0 .231-.7.231-1.57v-1.156q-.001-.374-.025-.689h.614c.989 0 1.785-.796 1.785-1.785v-6.542c0-.988-.796-1.785-1.785-1.785h-.681l-1.531-5.392c-.345-1.213-1.031-2.293-2.292-2.293zm0 1.014h14.849c.717 0 1.083.589 1.279 1.28l1.53 5.391h-20.467l1.53-5.392c.196-.69.562-1.279 1.28-1.279m-1.139 8.33a2.547 2.547 0 1 1 0 5.094 2.547 2.547 0 0 1 0-5.094m17.127 0a2.547 2.547 0 1 1 0 5.094 2.547 2.547 0 0 1 0-5.094" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1.10765;stroke-opacity:1" transform="translate(-151.67 -105.541)"/>`;
const _DefaultDesc = `Parking, or Car parking`;
const _DefaultTitle = "Parking, or Car parking";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf014ParkingOrCarParking = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-014-parking-or-car-parking`;
    const titleId = `pi-title-tf-014-parking-or-car-parking`;
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
Tf014ParkingOrCarParking.displayName = "Tf014ParkingOrCarParking";
