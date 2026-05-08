// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M20.002 105.694h52.917v52.917H20.002z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-20.002 -105.694)"/><path d="m46.46 116.376-15.366 10.159v3.575l15.366-10.16 15.366 10.16v-3.575zm1.643 14.01c-.986 0-1.41.027-2.129.845l-4.712 4.946a7.7 7.7 0 0 0-.873.945c-.45.662-.351 1.907-2.493 3.842a9.5 9.5 0 0 1 1.75-.278c2.112-.144 3.386.386 4.589.886.324.135.643.267.97.38h3.7c.552-.167 1.08-.379 1.592-.586.8-.323 1.571-.634 2.4-.773.06-.04.074-.073.029-.093l-8.061-3.638 3.46-3.46h7.007c.836 0 1.509-.672 1.509-1.508 0-.835-.673-1.508-1.509-1.508zm-12.253 3.371a2.894 2.894 0 0 0-2.895 2.894 2.894 2.894 0 0 0 2.895 2.895 2.894 2.894 0 0 0 2.894-2.895 2.894 2.894 0 0 0-2.894-2.894m17.455 8.483c-1.17.01-2.184.42-3.25.85s-2.188.883-3.483.9c-1.081.012-1.91-.333-2.78-.694-1.202-.5-2.476-1.03-4.588-.886-1.65.113-2.645.54-3.539.924-1.004.432-1.86.8-3.588.42l-.345-.088c.077.582.075 1.285.799 1.385 1.652.227 2.577-.17 3.639-.626.796-.342 1.681-.722 3.12-.82 1.81-.125 2.944.347 4.013.791.99.412 1.932.803 3.284.787 1.542-.019 2.775-.516 3.944-.988.956-.386 1.865-.752 2.784-.76 1.152-.01 2.078.351 2.99.707 1.254.49 2.487.97 4.274.677.472-.118.556-.698.609-1.356l-.35.083c-1.71.41-2.88-.048-4.073-.514-1.022-.399-2.059-.803-3.46-.792m0 2.747c-1.17.01-2.184.418-3.25.85-1.065.429-2.188.882-3.483.898-1.081.013-1.91-.331-2.78-.693-1.202-.5-2.476-1.03-4.588-.885-1.65.112-2.645.54-3.539.923-1.004.431-1.86.8-3.588.42l-.345-.089c.077.583.075 1.286.799 1.386 1.652.227 2.577-.17 3.639-.626.796-.342 1.681-.723 3.12-.821 1.81-.124 2.944.347 4.013.792.99.411 1.932.803 3.284.787 1.542-.019 2.775-.516 3.944-.988.956-.386 1.865-.753 2.784-.76 1.152-.01 2.078.35 2.99.707 1.254.49 2.487.971 4.274.677.472-.117.556-.699.609-1.357l-.35.083c-1.71.41-2.88-.046-4.073-.512-1.022-.4-2.059-.804-3.46-.792" style="display:inline;fill:#000;stroke-width:1.40551" transform="translate(-20.002 -105.694)"/>`;
const _DefaultDesc = `Indoor swimming pool`;
const _DefaultTitle = "Indoor swimming pool";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Sa003IndoorSwimmingPool = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-sa-003-indoor-swimming-pool`;
    const titleId = `pi-title-sa-003-indoor-swimming-pool`;
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
Sa003IndoorSwimmingPool.displayName = "Sa003IndoorSwimmingPool";
