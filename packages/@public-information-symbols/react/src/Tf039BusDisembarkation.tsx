// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M126.343 104.662h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-126.343 -104.662)"/><path d="M154.906 118.974c-.445.091-.81.374-.87.63-.005.01-2.618 8.69-2.618 8.69a.8.8 0 0 0-.06.299v11.693c0 .422.34.762.762.762h1.364v1.764c0 .782.63 1.41 1.412 1.41h.063c.782 0 1.411-.628 1.411-1.41v-1.764h11.887v1.764c0 .782.629 1.41 1.41 1.41h.064c.782 0 1.412-.628 1.412-1.41v-1.764h1.365a.76.76 0 0 0 .761-.762v-11.693a.8.8 0 0 0-.061-.301l-2.59-8.66c-.06-.266-.392-.587-.867-.658-2.917-.62-4.956-.967-7.401-.967s-4.673.308-7.444.967m1.41 2.35h11.995c.578 0 .86.496 1.044 1.045l2.117 6.316c.184.549-.466 1.045-1.045 1.045H154.2c-.579 0-1.229-.496-1.045-1.045l2.117-6.316c.184-.549.466-1.044 1.044-1.044m-20.143 2.426a1.474 1.474 0 1 0 0 2.948 1.474 1.474 0 0 0 0-2.948m.226 3.729c-.172 0-.335.01-.48.015a1.35 1.35 0 0 0-1.353 1.353v2.587l-2.057 2.232a.659.659 0 1 0 .97.894l1.087-1.18v10.015c0 .43.346.776.776.776s.776-.346.776-.776v-3.988l1.993 1.793c.316.285.8.26 1.085-.057a.767.767 0 0 0-.057-1.086c-1.007-.904-2.014-1.816-3.02-2.717v-.14l1.138-1.091c.015-1.75.015-3.486.015-5.244.006-.403.117-.569.422-.045l2.103 3.787a.76.76 0 0 0 1.036.296.76.76 0 0 0 .296-1.036l-3.263-5.877c-.365-.451-.952-.515-1.467-.511m3.851 8.11 4.102 7.105a1.06 1.06 0 0 1 1.453.408l1.667-.963c.246-.187.367-.53.23-.794l-1.651-2.778c-.758-1.276-2.404-1.026-3.465-.311l-.156.031-1.553-2.688zm14.85.236a1.882 1.882 0 1 1 0 3.764 1.882 1.882 0 0 1 0-3.764m14.427 0a1.882 1.882 0 1 1 0 3.764 1.882 1.882 0 0 1 0-3.764m-24.65 7.19a.596.596 0 1 0 0 1.192.596.596 0 0 0 0-1.192" style="fill:#000;fill-opacity:1;stroke-width:.600001" transform="translate(-126.343 -104.662)"/>`;
const _DefaultDesc = `Bus disembarkation`;
const _DefaultTitle = "Bus disembarkation";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf039BusDisembarkation = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-039-bus-disembarkation`;
    const titleId = `pi-title-tf-039-bus-disembarkation`;
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
Tf039BusDisembarkation.displayName = "Tf039BusDisembarkation";
