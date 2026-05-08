// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.782 69.064h52.917v52.917H90.782z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.782 -69.064)"/><path d="M116.97 78.661a4.11 4.11 0 0 0-4.109 4.109 4.11 4.11 0 0 0 4.11 4.108 4.11 4.11 0 0 0 4.108-4.108 4.11 4.11 0 0 0-4.109-4.109m-6.173 10.637c-.964 0-1.74.84-1.74 1.882v.406c0 1.042.776 1.881 1.74 1.881h2.303v14.924h-3.006c-.706 0-1.275.84-1.275 1.882v.406c0 1.043.569 1.882 1.275 1.882h14.061c.707 0 1.275-.84 1.275-1.882v-.406c0-1.042-.568-1.882-1.275-1.882h-3.027V89.298z" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:2.19112" transform="translate(-90.782 -69.064)"/>`;
const _DefaultDesc = `Information`;
const _DefaultTitle = "Information";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf001Information = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-001-information`;
    const titleId = `pi-title-pf-001-information`;
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
Pf001Information.displayName = "Pf001Information";
