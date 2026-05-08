// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from "react";
import type { SymbolProps } from "./SymbolPropsBase";

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M142.69 68.016h52.917v52.917H142.69z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-142.69 -68.016)"/><path d="M169.149 75.224a3.11 3.11 0 0 0-3.112 3.111 3.11 3.11 0 0 0 3.112 3.112 3.11 3.11 0 0 0 3.11-3.112 3.11 3.11 0 0 0-3.11-3.111m-.82 7.398.002.048c-.566.009-1.253.012-2.038.002-1.443.04-2.658 1.12-3.35 2.383-1.505 2.82-2.755 5.425-2.912 9.342-.022.537.344 1.115.8 1.4.736.407 1.323.113 1.38.329.216.82-.188 2.918.62 7.071.562 2.785 1.538 6.87 2.446 8.952.302.578.331 1.226 1.306 1.522.718.219 1.873-.204 1.978-1.838.02-.23.032-.454.04-.645V100.77a.547.547 0 1 1 1.096 0v10.43c.007.188.02.408.04.633.104 1.634 1.26 2.057 1.978 1.838.974-.296 1.003-.944 1.305-1.522.908-2.082 1.884-6.167 2.447-8.952.807-4.153.403-6.25.62-7.071.056-.216.643.078 1.38-.329.455-.285.821-.863.8-1.4-.158-3.917-1.408-6.522-2.912-9.342-.693-1.263-1.908-2.344-3.351-2.383-.785.01-1.472.007-2.038-.002l.003-.048s-.322.015-.82.03c-.497-.015-.82-.03-.82-.03" style="display:inline;fill:#000;fill-opacity:1;stroke-width:.799999;stroke-linecap:round" transform="translate(-142.69 -68.016)"/>`;
const _DefaultDesc = `Priority facilities for obese people`;
const _DefaultTitle = "Priority facilities for obese people";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export const Ac016PriorityFacilitiesForObesePeople = React.memo<SymbolProps>(
  ({ "aria-label": ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-016-priority-facilities-for-obese-people`;
    const titleId = `pi-title-ac-016-priority-facilities-for-obese-people`;
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
Ac016PriorityFacilitiesForObesePeople.displayName = "Ac016PriorityFacilitiesForObesePeople";
