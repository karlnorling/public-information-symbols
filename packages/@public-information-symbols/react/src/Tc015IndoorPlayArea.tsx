// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M52.316 148.832h52.917v52.917H52.316z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-52.316 -148.832)"/><path d="m78.774 158.2-17.86 10.457v2.587l17.86-10.459 17.86 10.459v-2.587zm7.364 13.945a2.55 2.55 0 0 0-2.55 2.55 2.55 2.55 0 0 0 2.55 2.55 2.55 2.55 0 0 0 2.519-2.154c1.004.386 1.664 1.058 2.15 2.22.21-2.122-.034-3.041-2.12-2.722a2.55 2.55 0 0 0-2.549-2.444m-13.728.022a2.55 2.55 0 0 0-2.55 2.55 2.55 2.55 0 0 0 2.55 2.55 2.55 2.55 0 0 0 2.55-2.55 2.55 2.55 0 0 0-2.55-2.55m-2.159 5.512c-.76.01-1.51.37-1.998 1.037l-3.477 4.759a2.504 2.504 0 0 0 .118 3.123l1.663 2.158H63.46c-.718 0-1.297.578-1.297 1.297 0 .718.579 1.297 1.297 1.297h5.767c.357 0 .68-.143.914-.375.57-.485.603-1.295.204-1.943l-1.525-2.555 2.508-3.341 1.352 5.118a1.02 1.02 0 0 0 1.246.735 1.02 1.02 0 0 0 .735-1.247c-.495-2.104-1.32-5.716-1.89-8.173-.147-.633-.589-1.086-1.02-1.41a2.48 2.48 0 0 0-1.5-.48m18.223.008-.074.002c-2.13.096-2.471 1.41-2.727 2.484l-1.879 7.54c-.066.265-.033.533.081.754h-4.102v-2.04h-2.151l-1.796 1.884v2.019h1.74a1.09 1.09 0 0 0-.587.965 1.087 1.087 0 0 0 1.087 1.086 1.087 1.087 0 0 0 1.086-1.086 1.09 1.09 0 0 0-.586-.965h3.303a1.09 1.09 0 0 0-.588.965 1.087 1.087 0 0 0 1.087 1.086 1.087 1.087 0 0 0 1.087-1.086 1.09 1.09 0 0 0-.586-.965h1.384v-1.473q.082.045.175.075a.97.97 0 0 0 1.22-.634l1.56-4.942 2.2 3.085q.112.155.24.29c-.567.888-1.82 2.286-1.838 3.388 0 .731.59 1.32 1.32 1.32h5.957c.73 0 1.32-.589 1.32-1.32s-.59-1.32-1.32-1.32H92.26l1.39-2.266c.658-.964.655-2.354.087-3.18l-3.25-4.556c-.487-.685-1.243-1.118-2.014-1.11z" style="stroke-width:3;paint-order:fill markers stroke" transform="translate(-52.316 -148.832)"/>`;
const _DefaultDesc = `Indoor play area`;
const _DefaultTitle = "Indoor play area";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tc015IndoorPlayArea = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tc-015-indoor-play-area`;
    const titleId = `pi-title-tc-015-indoor-play-area`;
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
Tc015IndoorPlayArea.displayName = "Tc015IndoorPlayArea";
