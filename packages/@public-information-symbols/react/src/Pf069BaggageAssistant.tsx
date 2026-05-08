// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M104.787 122.89h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-104.787 -122.89)"/><path d="M135.552 132.794v1.2h3.8v-1.2zm-.09 1.775a2.3 2.3 0 0 0-.334 1.188 2.29 2.29 0 0 0 2.287 2.287 2.29 2.29 0 0 0 2.288-2.287 2.3 2.3 0 0 0-.333-1.188zm3.701 3.79q-.075 0-.151.009l-2.451.49c-.87.352-.923.816-1.212 1.583l-1.396 4.045h-5.077c-.764 0-1.379.615-1.379 1.379s.64 1.238 1.404 1.229l.152-.003v13.005h-15.68a.4.4 0 0 0-.4.399.4.4 0 0 0 .4.4h16.478v-13.817l4.752-.073c.715-.018.768-.075 1.072-.7l.778-1.592.877 4.421c.109.51.134.762-.06 1.23l-1.983 4.79c-.284.522-.403 1.058-.5 1.634l-1.27 7.44c-.227.77.414 1.532 1.207 1.657a1.446 1.446 0 0 0 1.657-1.207l1.144-7.498 2.68-5.968 1.502 4.754c.107.584.366 1.026.69 1.503l4.48 6.617c.368.713 1.358.821 2.018.363s.821-1.358.363-2.018l-4.453-6.41c-1.597-5.63-2.769-10.766-4.076-16.214-.323-.814-.826-1.449-1.566-1.449zm-18.692 10.628a.714.714 0 0 0-.715.716v.917h-2.912v8.714h8.928v-8.714h-2.911v-.917a.715.715 0 0 0-.716-.716zm.314.559h1.046c.248 0 .447.2.447.447v.627h-1.94v-.627c0-.248.2-.447.447-.447m-4.983 1.074a.96.96 0 0 0-.96.96v6.793c0 .532.428.96.96.96h.17v-8.713zm10.843 0v8.714h.168a.96.96 0 0 0 .961-.961v-6.792a.96.96 0 0 0-.96-.961zm-10.419 11.05a1.125 1.125 0 0 0-1.125 1.126 1.125 1.125 0 0 0 1.125 1.125 1.125 1.125 0 0 0 1.125-1.125 1.125 1.125 0 0 0-1.125-1.126m10.326 0a1.125 1.125 0 0 0-1.125 1.126 1.125 1.125 0 0 0 1.125 1.125 1.125 1.125 0 0 0 1.125-1.125 1.125 1.125 0 0 0-1.125-1.126" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.773399;stroke-opacity:1" transform="translate(-104.787 -122.89)"/>`;
const _DefaultDesc = `Baggage assistant`;
const _DefaultTitle = "Baggage assistant";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf069BaggageAssistant = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-069-baggage-assistant`;
    const titleId = `pi-title-pf-069-baggage-assistant`;
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
Pf069BaggageAssistant.displayName = "Pf069BaggageAssistant";
