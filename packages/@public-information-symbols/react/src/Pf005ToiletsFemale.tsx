// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.78 69.25h52.917v52.917H90.78z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.78 -69.25)"/><path d="M117.233 77.613a2.783 2.783 0 1 0 0 5.567 2.783 2.783 0 0 0 0-5.567m-3.24 6.3c-.947.123-1.152.687-1.41 1.316l-3.403 10.78c-.206.652.096 1.325.679 1.509.582.184 1.216-.194 1.422-.846l2.652-8.397 1.016 3.605a4 4 0 0 0-.238.611l-3.704 11.46c-.184.568.384 1.077.861 1.077h2.636l1.162 7.27c.131.824.701 1.505 1.573 1.505.871 0 1.44-.68 1.573-1.505l1.161-7.27h2.636c.477 0 1.045-.509.861-1.077l-3.704-11.46a4 4 0 0 0-.238-.61l1.016-3.606 2.652 8.397c.206.652.84 1.03 1.423.846.582-.184.885-.857.679-1.51l-3.404-10.78c-.255-.725-.761-1.3-1.41-1.315h-5.274z" style="stroke-width:1.01549" transform="translate(-90.78 -69.25)"/>`;
const _DefaultDesc = `Toilets - female`;
const _DefaultTitle = "Toilets - female";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf005ToiletsFemale = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-005-toilets-female`;
    const titleId = `pi-title-pf-005-toilets-female`;
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
Pf005ToiletsFemale.displayName = "Pf005ToiletsFemale";
