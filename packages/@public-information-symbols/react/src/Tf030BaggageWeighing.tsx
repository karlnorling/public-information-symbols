// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M47.878 99.5h52.917v52.917H47.878z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-47.878 -99.5)"/><path d="M61.424 109.334a4.75 4.75 0 0 0-4.75 4.75 4.75 4.75 0 0 0 3.781 4.648v23.85h31.543v-2.199H62.654V118.67a4.75 4.75 0 0 0 3.521-4.586 4.75 4.75 0 0 0-4.75-4.75m0 1.5a3.25 3.25 0 0 1 1.93.634l-1.968 1.968-.353.353.707.707.354-.353 1.963-1.964a3.25 3.25 0 0 1 .618 1.905 3.25 3.25 0 0 1-3.25 3.25 3.25 3.25 0 0 1-3.25-3.25 3.25 3.25 0 0 1 3.25-3.25m15.064 7.025c-1.08 0-1.95.315-1.95.705v2.164h-4.45v17.395h14.4v-17.395h-4.45v-2.164c0-.39-.87-.705-1.95-.705zm-.925 1.125h3.45v1.744h-3.45Zm-8.351 1.744c-1.097 0-1.98.883-1.98 1.98v13.435c0 1.097.883 1.98 1.98 1.98h1.276v-17.395zm18.877 0v17.395h1.276c1.097 0 1.98-.883 1.98-1.98v-13.435c0-1.097-.883-1.98-1.98-1.98z" style="display:inline;fill:#000;stroke-width:1.1;stroke-linecap:square" transform="translate(-47.878 -99.5)"/>`;
const _DefaultDesc = `Baggage weighing`;
const _DefaultTitle = "Baggage weighing";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf030BaggageWeighing = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-030-baggage-weighing`;
    const titleId = `pi-title-tf-030-baggage-weighing`;
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
Tf030BaggageWeighing.displayName = "Tf030BaggageWeighing";
