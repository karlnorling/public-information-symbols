// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M129.441 188.978h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-129.44 -188.978)"/><path d="M21.91 174.577c-1.441-.004-2.646.133-3.408.476l.022 2.323c.43.06.516.35.602.667.792 6.119 1.226 8.251 7.141 8.345 5.293-.057 6.795-2.544 8.561-7.012.162-.697.658-.624 1.638-.624s1.476-.073 1.638.624c1.766 4.468 3.268 6.955 8.56 7.012 5.916-.094 6.35-2.226 7.141-8.345.086-.318.172-.607.603-.667l.021-2.323c-3.047-1.37-13.181.54-17.208 1.658-.534.06-.978.057-1.51 0-3.02-.838-9.476-2.123-13.8-2.134" style="fill:#000;stroke-width:.799999;stroke-linecap:round" transform="translate(-9.822 -153.12)"/><path d="M125.648 100.212h53.687v2.665h-53.687z" style="fill:#b71f2e;fill-opacity:1;stroke:none;stroke-width:.799999;stroke-linecap:round" transform="rotate(44.919 180.294 -88.44)"/>`;
const _DefaultDesc = `No sunglasses`;
const _DefaultTitle = "No sunglasses";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Bp017NoSunglasses = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-bp-017-no-sunglasses`;
    const titleId = `pi-title-bp-017-no-sunglasses`;
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
Bp017NoSunglasses.displayName = "Bp017NoSunglasses";
