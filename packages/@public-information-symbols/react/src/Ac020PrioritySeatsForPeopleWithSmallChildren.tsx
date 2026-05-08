// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M107.759 50.631h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-107.76 -50.63)"/><path d="M130.103 61.507a2.829 2.829 0 1 0 0 5.658 2.829 2.829 0 0 0 0-5.658m6.589 5.508a1.673 1.673 0 1 0 0 3.346 1.673 1.673 0 0 0 0-3.346m-6.093.993q-.09 0-.182.007a3.5 3.5 0 0 0-.703.055 3.46 3.46 0 0 0-2.801 4.03l1.438 7.998c.353 1.902 1.415 3.03 3.562 3.014h6.075l.6 7.938c.072.967.9 1.688 1.856 1.616a1.737 1.737 0 0 0 1.598-1.872l-.803-10.799a1.736 1.736 0 0 0-1.85-1.616 1.8 1.8 0 0 0-.418-.05l-3.94-.03c-.543-3.15-.704-4.468-1.092-7.257-.244-1.754-1.415-3.077-3.34-3.034m6.034 3.17a1.77 1.77 0 0 0-1.588 1.947l.275 2.71c.1.98.99 1.489 1.54 1.498.268-.01 3.22-.002 3.22-.002l1.174.792a.875.875 0 0 0 1.225-.196c.285-.394.217-.97-.196-1.225-1.078-.665-1.621-.984-2.108-.992-.498-.007-.925.002-1.301.029.004-.088-.009-.173-.018-.263l-.235-2.315 1.43.22a.854.854 0 0 0 .976-.717v-.008a.854.854 0 0 0-.716-.976c-1.268-.196-2.83-.538-3.678-.503m-10.85 13.082v1.704h10.252V84.26z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.2;stroke-linecap:round" transform="translate(-107.76 -50.63)"/>`;
const _DefaultDesc = `Priority seats for people with small children`;
const _DefaultTitle = "Priority seats for people with small children";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac020PrioritySeatsForPeopleWithSmallChildren = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-020-priority-seats-for-people-with-small-children`;
    const titleId = `pi-title-ac-020-priority-seats-for-people-with-small-children`;
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
Ac020PrioritySeatsForPeopleWithSmallChildren.displayName =
  "Ac020PrioritySeatsForPeopleWithSmallChildren";
