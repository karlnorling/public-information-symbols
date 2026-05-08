// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M172.768 80.791h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-172.768 -80.79)"/><path d="M186.405 89.026a5.556 5.556 0 1 0 0 11.113 5.556 5.556 0 0 0 0-11.113m0 .893a4.663 4.663 0 1 1 0 9.327 4.663 4.663 0 0 1 0-9.327m-.265.926v3.702l-2.283-1.54-.42.623 2.703 1.822v.007h.711v-4.614zm20.538 2.05a3.01 3.01 0 1 0 0 6.02 3.01 3.01 0 0 0 0-6.02m-7.87.034a3.01 3.01 0 1 0 0 6.02 3.01 3.01 0 0 0 0-6.02m7.87 6.945a2.74 2.74 0 0 0-2.745 2.745v9.69a2.74 2.74 0 0 0 2.85 2.743c.167.065.35.101.54.101h7.095v8.947c0 .742.597 1.34 1.339 1.34s1.34-.598 1.34-1.34v-9.955q-.001-.222-.068-.421l.001-.042c0-.816-.656-1.472-1.472-1.472h-6.135l-.023-3.192c.225.14.422.34.802.43l6.132 1.64a.986.986 0 0 0 1.21-.698l.027-.103a.986.986 0 0 0-.699-1.21l-6.098-1.631c-.99-3.72-.706-2.338-1.35-4.827a2.84 2.84 0 0 0-2.746-2.745m-7.512.1a2.503 2.503 0 0 0-2.509 2.508v9.761h-6.104c-.848-.012-1.06.186-1.645.768l-6.258 6.091c-.556.542-.577 1.415-.047 1.96s1.404.546 1.96.004l4.388-4.272v7.488c0 .66.531 1.19 1.191 1.19s1.19-.53 1.19-1.19v-9.41h7.296c2.229-.006 3.112-.665 3.123-2.549v-9.84a2.503 2.503 0 0 0-2.51-2.51z" style="fill:#000;fill-opacity:1;stroke-width:1.41818" transform="translate(-172.768 -80.79)"/></g>`;
const _DefaultDesc = `Lounge or waiting area`;
const _DefaultTitle = "Lounge or waiting area";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Pf014LoungeOrWaitingArea = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-014-lounge-or-waiting-area`;
    const titleId = `pi-title-pf-014-lounge-or-waiting-area`;
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
Pf014LoungeOrWaitingArea.displayName = "Pf014LoungeOrWaitingArea";
