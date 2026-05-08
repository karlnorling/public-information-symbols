// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M41.671 101.993h52.917v52.917H41.671z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-41.67 -101.993)"/><path d="M77.879 107.94c-.203 0-.403.099-.61.325v.018c-.527.607-.881 1.885-.9 2.753l-.24 7.214-8.736 6.432.03.83c.02.624.152.814.873.686l8.025-2.387.19 4.557-3.63 2.613v1.62l4.998-1.408 4.998 1.408v-1.62l-3.631-2.613.191-4.557 8.025 2.387c.72.128.852-.062.874-.685l.028-.83-8.735-6.433-.241-7.214c-.018-.868-.373-2.146-.9-2.753v-.018c-.206-.226-.407-.325-.61-.325m-20.514 18.213a2.254 2.254 0 0 0-2.252 2.252v.746h-4.459c-.542 0-.997.393-1.112.9l-1.648 6.153v5.387l1.633 6.093.002.006c.103.328.214.613.4.846s.468.394.797.426l.013.002H64.99l.013-.002c.33-.032.608-.193.795-.426.186-.233.299-.518.402-.846l.003-.006 1.633-6.093v-5.387l-1.65-6.156a1.15 1.15 0 0 0-1.112-.897h-4.458v-.745a2.254 2.254 0 0 0-2.252-2.253zm0 .6h.998c.92 0 1.652.732 1.652 1.653v.745h-4.3v-.745c0-.92.73-1.653 1.65-1.653m-6.711 2.998h14.422c.215 0 .478.224.526.434l.002.006 1.63 6.093v5.229l-1.604 5.998c-.095.299-.196.521-.3.65a.48.48 0 0 1-.382.204H50.784a.48.48 0 0 1-.385-.203c-.104-.13-.203-.352-.297-.65v-.003l-1.608-5.996v-5.229l1.633-6.093.003-.006c.047-.21.31-.434.524-.434zm4.75 1.527c.039.888-.217 1.874.586 2.51v1.358l1.578 2.734h.592l1.578-2.734v-1.359c.803-.635.548-1.621.586-2.51-.755.175-.957.814-1.412 1.302a3.5 3.5 0 0 0-.747-.108v-.001l-.05-.001a7 7 0 0 0-.502 0h-.05v.002c-.25.011-.497.041-.747.108-.455-.488-.657-1.127-1.412-1.301m.35 4.976c-.551.185-1.12 1.288-1.365 2.074.036 1.534-.045 3.723.476 4.196l.313 3.09-.045.265c-.556.244-.65.651-.132 1.065.541.233.856-.311 1.086-.976v-4.258c.343-.475 1.006-.752 1.777-.809.77.057 1.434.334 1.777.809v4.258c.23.665.545 1.209 1.086.976.518-.414.424-.821-.133-1.065l-.044-.266.313-3.089c.521-.473.44-2.662.476-4.196-.244-.786-.814-1.889-1.365-2.074l-1.11 2.196c-.564.369-1.436.376-2 0z" style="color:#000;fill:#000;-inkscape-stroke:none" transform="translate(-41.67 -101.993)"/>`;
const _DefaultDesc = `Animal transportation`;
const _DefaultTitle = "Animal transportation";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf038AnimalTransportation = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-038-animal-transportation`;
    const titleId = `pi-title-tf-038-animal-transportation`;
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
Tf038AnimalTransportation.displayName = "Tf038AnimalTransportation";
