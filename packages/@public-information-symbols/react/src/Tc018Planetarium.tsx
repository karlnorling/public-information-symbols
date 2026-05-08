// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M106.251 158.058h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-106.251 -158.058)"/><path d="M132.398 168.041a17.6 17.6 0 0 0-11.544 4.594 17.6 17.6 0 0 0-5.72 12.79h-3.182v15.569h41.516v-15.569h-3.173a17.6 17.6 0 0 0-6.198-13.202 17.6 17.6 0 0 0-11.699-4.182m-3.02 2.2 1.353 2.085 2.484-.126-1.566 1.932.888 2.323-2.321-.893-1.935 1.563.131-2.484-2.084-1.357 2.402-.643zm-7.143 6.097 1.104 1.703 2.028-.103-1.278 1.577.725 1.896-1.895-.728-1.58 1.276.108-2.028-1.702-1.108 1.961-.525zm10.74 1.72.84 1.293 1.54-.08-.971 1.198.55 1.44-1.44-.552-1.199.969.082-1.54-1.292-.842 1.49-.398zm8.208.417a3.83 3.83 0 0 1 2.795 1.214 1.34 7.042 64.348 0 1 3.552-.436 1.34 7.042 64.348 0 1-2.56 2.502 4 4 0 0 1 .039.547 3.826 3.826 0 0 1-3.826 3.826 3.83 3.83 0 0 1-2.795-1.213 1.34 7.042 64.348 0 1-3.553.435 1.34 7.042 64.348 0 1 2.562-2.5 4 4 0 0 1-.04-.548 3.826 3.826 0 0 1 3.826-3.827m-11.547 7.755.564.87 1.036-.053-.654.805.37.969-.967-.372-.807.65.055-1.034-.869-.566 1.002-.268zm-7.083.104a4.62 4.62 0 0 0-1.802 3.657 4.62 4.62 0 0 0 4.622 4.622 4.6 4.6 0 0 0 1.352-.205 4.8 4.8 0 0 1-3.495 1.505 4.814 4.814 0 0 1-4.814-4.814 4.814 4.814 0 0 1 4.137-4.765m19.156 2.687 1.218 1.877 2.235-.114-1.409 1.738.8 2.09-2.09-.802-1.74 1.406.118-2.235-1.876-1.22 2.162-.579z" style="display:inline;fill:#1f0000;stroke-width:.314329;stroke-linecap:round" transform="translate(-106.251 -158.058)"/>`;
const _DefaultDesc = `Planetarium`;
const _DefaultTitle = "Planetarium";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tc018Planetarium = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tc-018-planetarium`;
    const titleId = `pi-title-tc-018-planetarium`;
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
Tc018Planetarium.displayName = "Tc018Planetarium";
