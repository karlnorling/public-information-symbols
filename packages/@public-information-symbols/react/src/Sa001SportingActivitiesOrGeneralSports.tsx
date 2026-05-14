// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M53.025 124.703h52.917v52.917H53.025z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-53.025 -124.703)"/><path d="m96.408 132.7-5.072 32.008c-.068.723-1.005 1.34-1.478 1.327l-6.24-.376c-1.011-.125-2.233.25-2.017 1.44l.183 1.005c.156.87 1.09 1.216 1.879 1.216h6.35c1.104.03 2.263-.62 2.5-1.762l.256-1.264 5.248-33.34zm-28.871.33c-3.638 0-6.587 3.625-6.587 8.095 0 3.495 1.772 6.542 4.326 7.605.785.377 1.564 1.211 1.574 1.693-.003 2.704.009 5.408 0 8.111l-.688.577v10.512h2.75v-10.512l-.688-.577c.016-2.684.003-5.372 0-8.064.007-.485 1.005-1.44 1.505-1.71 2.483-1.273 4.395-4.108 4.395-7.635 0-4.47-2.95-8.094-6.587-8.094m0 1.528c2.951 0 5.344 2.94 5.344 6.567s-2.392 6.568-5.344 6.568-5.344-2.94-5.344-6.568 2.393-6.568 5.344-6.567m13.496 11.258a8.656 8.656 0 1 0 0 17.313 8.656 8.656 0 0 0 0-17.313m.473 1.238a7.64 7.64 0 0 1 4.45 1.782l.004.222-3.07-.067-1.398-.887zm-1.018.003.017 1.213-1.398.887-3.07.066.005-.33a7.64 7.64 0 0 1 4.446-1.837zm3.3 2.899h.032l1.952.055 1.508 2.129-.81 1.94h-1.03l-1.963-2.794zm-5.135.088.842 1.176-1.463 3.038-1.663.31-1.53-2.328 1.241-2.018zm1.663 1.708h2.263l1.973 2.75-1.308 1.974h-3.038l-1.287-1.974zm7.685 1.087.474.128q.194.84.195 1.705a7.6 7.6 0 0 1-.606 2.98l-.928-.733.077-2.628zm-13.758.175 1.255 1.928v2.369s-.868.626-1.257.85a7.64 7.64 0 0 1-.845-3.49c.002-.534.06-1.067.173-1.59zm5.652 4.47h3.537l.699.977-1.641 2.783h-2.262l-1.608-2.24zm6.886.345.875.646a7.64 7.64 0 0 1-3.705 3.255l-.452-.575 1.33-2.018zm-10.878.276 1.94 1.143 1.287 1.984-.575.66a7.64 7.64 0 0 1-3.896-3.025 43 43 0 0 0 1.244-.761" style="display:inline;fill:#1f0000;stroke-width:1.21023;stroke-linecap:round" transform="translate(-53.025 -124.703)"/>`;
const _DefaultDesc = `Sporting activities or general sports`;
const _DefaultTitle = 'Sporting activities or general sports';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Sa001SportingActivitiesOrGeneralSports = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-sa-001-sporting-activities-or-general-sports`;
    const titleId = `pi-title-sa-001-sporting-activities-or-general-sports`;
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
Sa001SportingActivitiesOrGeneralSports.displayName = 'Sa001SportingActivitiesOrGeneralSports';
