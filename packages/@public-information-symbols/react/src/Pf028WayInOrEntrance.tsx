// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M204.465 118.084h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-204.465 -118.084)"/><path d="M212.706 129.178v2.619h25.444v-2.62zm25.63 6.853h-8.745l-8.978 8.512 8.978 8.51h8.746l-5.192-5.19h15.996v-6.64h-15.996zm-25.63 21.257v2.619h25.444v-2.62z" style="stroke-width:1.5" transform="translate(-204.465 -118.084)"/>`;
const _DefaultDesc = `Way in or Entrance`;
const _DefaultTitle = "Way in or Entrance";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf028WayInOrEntrance = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-028-way-in-or-entrance`;
    const titleId = `pi-title-pf-028-way-in-or-entrance`;
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
Pf028WayInOrEntrance.displayName = "Pf028WayInOrEntrance";
