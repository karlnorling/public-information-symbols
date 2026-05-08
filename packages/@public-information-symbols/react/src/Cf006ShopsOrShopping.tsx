// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M30.671 69.703h52.917v52.917H30.671z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-30.67 -69.703)"/><path d="m61.974 76.132-2.252 10.186 5.138-.547 1.897-8.582zM48.05 78.409a1.374 1.374 0 0 0-1.317 1.681l1.68 7.432.04-.005 2.717-.29-1.75-7.744a1.374 1.374 0 0 0-1.37-1.074m5.5 1.493v1.254h3.763v-1.254zm18.573 1.634a1.27 1.27 0 0 0-1.132.69l-3.27-.025c-.446-.02-.594.196-.715.326-.122.13-.21.262-.293.406a3.2 3.2 0 0 0-.37.951v.002l-.505 2.61-24.162 2.535a.7.7 0 0 0-.623.77.7.7 0 0 0 .77.622l.074-.008v8.773h-.336a.7.7 0 0 0-.7.702.7.7 0 0 0 .7.699h22l2.214 7.379c.027.321.026.509.046.539-.077.03-.22.073-.405.123H41.843a.7.7 0 0 0-.701.7.7.7 0 0 0 .7.7H65.61l.086-.023c.298-.077.535-.141.764-.246s.482-.286.625-.555c.285-.537.133-.926.074-1.459l-.008-.062-2.128-7.096h.373a.7.7 0 0 0 .701-.7.7.7 0 0 0-.701-.7h-.59l2.21-11.408.524-.055a.7.7 0 0 0 .624-.77.7.7 0 0 0-.77-.623l-.1.01.424-2.188v-.002c.025-.122.118-.364.209-.521.009-.016.01-.015.02-.03l3.196.024a1.27 1.27 0 0 0 .98.46 1.275 1.275 0 0 0 1.275-1.275 1.275 1.275 0 0 0-1.276-1.275zm-17.516.279L52.49 83.76v3.328l5.88-.626V83.76l-2.116-1.945zm10.953 6.119-.644 3.327h-.895v-3.166zm-2.74.287v3.04h-1.385v-2.895zm-2.584.271v2.77h-1.384v-2.625zm-2.586.271v2.498h-1.384v-2.353zm-2.586.271v2.227H53.68V89.18zm-2.584.272v1.955h-1.384v-1.81zm-2.585.27v1.685H48.51v-1.539zm-2.584.272v1.413h-1.387v-1.268zm-2.587.271v1.142h-1.429v-.992zm-1.429 2.341h1.43v2.721h-1.43zm2.629 0h1.387v2.721h-1.387zm2.586 0h1.385v2.721H48.51zm2.586 0h1.384v2.721h-1.384zm2.584 0h1.384v2.721H53.68zm2.586 0h1.384v2.721h-1.384zm2.586 0h1.384v2.721h-1.384zm2.583 0h1.385v2.721h-1.385zm2.586 0h.663l-.527 2.721h-.136zm-20.726 3.92h1.43v2.809h-1.43zm2.629 0h1.387v2.809h-1.387zm2.586 0h1.385v2.809H48.51zm2.586 0h1.384v2.809h-1.384zm2.584 0h1.384v2.809H53.68zm2.586 0h1.384v2.809h-1.384zm2.586 0h1.384v2.809h-1.384zm2.583 0h1.385v2.809h-1.385zm-17.6 14.761a2.525 2.525 0 0 0-2.525 2.525 2.525 2.525 0 0 0 2.524 2.525 2.525 2.525 0 0 0 2.525-2.525 2.525 2.525 0 0 0-2.525-2.525m19.68 0a2.525 2.525 0 0 0-2.524 2.525 2.525 2.525 0 0 0 2.524 2.525 2.525 2.525 0 0 0 2.525-2.525 2.525 2.525 0 0 0-2.525-2.525" style="color:#000;fill:#000;fill-opacity:1;stroke-linecap:round" transform="translate(-30.67 -69.703)"/>`;
const _DefaultDesc = `Shops or Shopping`;
const _DefaultTitle = "Shops or Shopping";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf006ShopsOrShopping = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-cf-006-shops-or-shopping`;
    const titleId = `pi-title-cf-006-shops-or-shopping`;
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
Cf006ShopsOrShopping.displayName = "Cf006ShopsOrShopping";
