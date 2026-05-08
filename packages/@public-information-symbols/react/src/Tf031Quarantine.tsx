// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M74.377 112.577h52.917v52.917H74.377z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-74.377 -112.577)"/><path d="m97.055 125.202 1.11 2.419h6.631l.229-1.171zm1.303 3.342-1.272 1.38h.995a3.363 3.363 0 0 0 3.338 3.748c1.715 0 3.365-1.498 3.362-3.363v-1.765zm-1.695 6.018c-.976.02-1.514.75-2.101 1.8l-5.219 12.258h3.571l3.478-7.454v7.535h11.675v-12.278c.008-.88-1.062-1.844-1.981-1.83h-2.61l-1.43 3.739h-.391l-1.66-3.77zM84.134 150.07c-.775 0-1.4.624-1.4 1.4s.625 1.4 1.4 1.4h33.403c.775 0 1.4-.625 1.4-1.4 0-.776-.625-1.4-1.4-1.4z" style="fill:#000;stroke-width:3.94633" transform="translate(-74.377 -112.577)"/>`;
const _DefaultDesc = `Quarantine`;
const _DefaultTitle = "Quarantine";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf031Quarantine = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-031-quarantine`;
    const titleId = `pi-title-tf-031-quarantine`;
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
Tf031Quarantine.displayName = "Tf031Quarantine";
