// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M195.173 158.349h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-195.173 -158.35)"/><path d="M209.516 167.87a.815.815 0 0 0-.817.817v33.06h16.734V182.62h2.078v15.522c.006.489.212.82.44 1.156.227.336.511.657.814.953s.62.563.928.774c.307.21.536.401 1.017.431l.023.002h.88l.005-.002c.453-.007.702-.18.995-.374.292-.196.586-.45.863-.747.555-.594 1.089-1.35 1.088-2.29V185.88l-.002-.027c-.057-.814-.474-1.793-1.147-2.762-.672-.97-1.648-1.924-2.976-1.97h-1.428v-8.298l-3.578-2.067v-2.07a.815.815 0 0 0-.817-.818zm1.528 1.44h12.044v10.196h-12.044zm14.389 3.18 2.078 1.2v7.432h-2.078v-2.39zm3.578 10.131h1.375c.578.02 1.264.557 1.797 1.325.532.766.862 1.765.88 2.01v12.091c0 .263-.28.832-.685 1.266a3.6 3.6 0 0 1-.598.521c-.175.117-.35.128-.185.125h-.732c.028-.008-.15-.054-.323-.171a6 6 0 0 1-.726-.608 5 5 0 0 1-.622-.72c-.147-.219-.182-.411-.181-.336z" style="display:inline;fill:#000;stroke-width:.799999;stroke-linecap:round" transform="translate(-195.173 -158.35)"/>`;
const _DefaultDesc = `Filling station`;
const _DefaultTitle = "Filling station";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Cf009FillingStation = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-cf-009-filling-station`;
    const titleId = `pi-title-cf-009-filling-station`;
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
Cf009FillingStation.displayName = "Cf009FillingStation";
