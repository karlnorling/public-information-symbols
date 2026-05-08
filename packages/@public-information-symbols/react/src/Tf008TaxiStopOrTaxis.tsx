// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M126.284 41.993h52.917V94.91h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-126.284 -41.993)"/><path d="M147.404 54.179a.65.65 0 0 0-.654.653v3.324c0 .363.292.654.654.654h10.678a.653.653 0 0 0 .654-.654v-3.324a.65.65 0 0 0-.654-.653zm.378.747h2.666v.556h-.993v2.727h-.677v-2.727h-.996zm3.721 0h.716l1.343 3.283h-.737l-.293-.745h-1.34l-.277.745h-.719zm2.185 0h.792l.672 1.055.66-1.055h.785l-1.044 1.595 1.147 1.688h-.817l-.744-1.135-.746 1.135h-.813l1.147-1.713zm3.339 0h.677v3.283h-.677zm-5.174.766-.453 1.218h.915zm-7.054 4.336c-1.35 0-2.084 1.155-2.453 2.453l-1.637 5.77h-.73a1.905 1.905 0 0 0-1.91 1.91v7c0 1.057.852 1.91 1.91 1.91h.657c-.016.222-.026.47-.026.736v1.238c0 .93.11 1.68.247 1.68h2.864c.137 0 .247-.75.247-1.68v-1.238q-.001-.4-.026-.737h17.602q-.025.336-.027.737v1.238c0 .93.11 1.68.248 1.68h2.864c.137 0 .247-.75.247-1.68v-1.238q-.001-.4-.026-.737h.657a1.906 1.906 0 0 0 1.909-1.91v-7c0-1.058-.852-1.91-1.91-1.91h-.73l-1.637-5.769c-.368-1.298-1.103-2.453-2.453-2.453zm0 1.084h15.887c.768 0 1.16.63 1.37 1.369l1.637 5.77h-21.9l1.637-5.77c.21-.739.602-1.369 1.37-1.369m-1.22 8.913a2.725 2.725 0 0 1 2.726 2.725 2.725 2.725 0 0 1-2.725 2.726 2.725 2.725 0 0 1-2.725-2.726 2.725 2.725 0 0 1 2.725-2.725m18.327 0a2.725 2.725 0 0 1 2.725 2.725 2.725 2.725 0 0 1-2.725 2.726 2.725 2.725 0 0 1-2.725-2.726 2.725 2.725 0 0 1 2.725-2.725" style="display:inline;fill:#000;stroke-width:1.8" transform="translate(-126.284 -41.993)"/>`;
const _DefaultDesc = `Taxi stop, or Taxis`;
const _DefaultTitle = "Taxi stop, or Taxis";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Tf008TaxiStopOrTaxis = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-008-taxi-stop-or-taxis`;
    const titleId = `pi-title-tf-008-taxi-stop-or-taxis`;
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
Tf008TaxiStopOrTaxis.displayName = "Tf008TaxiStopOrTaxis";
