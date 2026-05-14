// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M108.735 94.187h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-108.735 -94.187)"/><path d="M143.585 101.068v3.732h-3.732v3.481h3.732v3.733h3.482v-3.733h3.732V104.8h-3.732v-3.732zm-10.589 2.638a2.3 2.3 0 0 0-2.306 2.306v1.22a2.3 2.3 0 0 0 2.306 2.307 2.3 2.3 0 0 0 2.307-2.307v-1.22a2.3 2.3 0 0 0-2.307-2.306m-4.832 1.695a1.722 1.722 0 0 0-1.682 1.973l.142.981a1.72 1.72 0 0 0 1.955 1.462 1.72 1.72 0 0 0 1.461-1.955l-.141-.982a1.72 1.72 0 0 0-1.735-1.48m-3.368 2.584a1.372 1.372 0 0 0-1.243 1.95l.33.719a1.373 1.373 0 0 0 1.823.677 1.37 1.37 0 0 0 .677-1.824l-.33-.719a1.37 1.37 0 0 0-1.257-.803m-2.378 2.418c-.17.001-.343.038-.509.114a1.234 1.234 0 0 0-.61 1.64l.297.647a1.234 1.234 0 0 0 1.64.608 1.234 1.234 0 0 0 .61-1.64l-.297-.646a1.23 1.23 0 0 0-1.13-.723m8.77.676c-4.475.016-10.926 5.11-9.34 11.069l5.206 15.493c2.405 4.676 10.079 2.787 8.155-3.951-.59-1.895-3.91-4.053-3.372-8.156.702-5.338 5.563-8.134 2.619-12.92-.713-1.068-1.897-1.54-3.267-1.535m-10.62 2.078a.98.98 0 0 0-.845 1.477l.283.488a.98.98 0 0 0 1.343.356.98.98 0 0 0 .356-1.343l-.284-.488a.98.98 0 0 0-.854-.49" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-108.735 -94.187)"/>`;
const _DefaultDesc = `Foot care or Podiatry`;
const _DefaultTitle = 'Foot care or Podiatry';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Cf012FootCareOrPodiatry = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-cf-012-foot-care-or-podiatry`;
    const titleId = `pi-title-cf-012-foot-care-or-podiatry`;
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
        style={{ display: 'contents', ...style }}
      />
    );
  },
);
Cf012FootCareOrPodiatry.displayName = 'Cf012FootCareOrPodiatry';
