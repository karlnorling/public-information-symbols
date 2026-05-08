// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M29.544 69.25h52.917v52.917H29.544z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-29.544 -69.25)"/><path d="M50.27 79.143a2.463 2.463 0 1 0 0 4.926 2.463 2.463 0 0 0 0-4.926m17.867.936a2.462 2.462 0 1 0 0 4.925 2.462 2.462 0 0 0 0-4.925M47.798 84.71c-.838.11-1.019.609-1.247 1.165l-2.891 8.1h2.037l1.797-5.856.6 4.09-.689 1.767h5.706l-.716-1.754.66-4.103.13.172.834 3.316a.703.703 0 0 0 .856.51l.205-.051a.7.7 0 0 0 .212-.092.65.65 0 0 0 .337-.21l2.958-3.478c.264-.31.182-.811-.183-1.122-.366-.31-.873-.31-1.137 0l-2.078 2.443-.343-1.367c-.085-.56-.6-1.841-.64-2.342-.226-.642-.674-1.15-1.248-1.164l-.889-.016H48.48Zm17.583.943c-.838.11-1.019.608-1.247 1.164l-3.304 6.63h2.162l2.37-4.393v5.483l-.043.294H43.354c-.569 0-1.027.459-1.027 1.028s.458 1.027 1.027 1.027H65.02l-2.014 13.808c-.11.755.409 1.45 1.163 1.56l.033.004c.754.11 1.45-.408 1.56-1.162l1.796-12.322c.011-.396 1.142-.411 1.17.01l1.796 12.312c.11.754.805 1.272 1.56 1.162l.032-.004a1.37 1.37 0 0 0 1.163-1.56l-2.014-13.808h2.131l.018.057c.182.578.744.911 1.259.749.355-.113.593-.43.646-.806h2.412c.569 0 1.027-.458 1.027-1.027 0-.57-.458-1.028-1.027-1.028h-2.939l-2.53-8.014c-.225-.642-.674-1.15-1.247-1.164h-4.667zm5.542 3.4 1.824 5.778h-1.781l-.043-.294zm-37.528 8.41c-.083 0-.149.028-.149.062s.07.063.157.063.157-.029.157-.063c0-.035-.07-.063-.157-.063z" style="display:inline;stroke-width:.79375" transform="translate(-29.544 -69.25)"/>`;
const _DefaultDesc = `Check-in or reception`;
const _DefaultTitle = "Check-in or reception";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf008CheckInOrReception = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-008-check-in-or-reception`;
    const titleId = `pi-title-pf-008-check-in-or-reception`;
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
Pf008CheckInOrReception.displayName = "Pf008CheckInOrReception";
