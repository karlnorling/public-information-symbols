// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M150.434 135.635h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-150.434 -135.635)"/><path d="m186.815 144.06-2.882.012c-.776-.023-1.118.145-1.65 1.058l-1.233 2.223 2.529 1.492 2.13-3.619c.409-.683.538-.808 1.106-1.167m.448.333h-.05c-.21.01-.428.09-.65.26-.444.414-.974 1.323-1.015 1.567l.718 1.251-.954.451 2.946.042 1.488-2.604-.91.646-.248-.519c-.344-.643-.809-1.087-1.325-1.094m-20.897 1.31v1.45c-.716.182-.735.603 0 .749.137.22.099.293 0 .515-1.506.947-3.51 2.013-4.163 3.975-.088.177-.087.581.256.826v7.53c.25 1.74 1.54 1.818 1.615 2.168-.135.57-1.7 1.31-1.824 2.339v12.675c.053 1.408.603 2.19 1.637 2.198h8.292c1.034-.008 1.584-.79 1.638-2.198v-12.675c-.124-1.028-1.69-1.769-1.825-2.339.075-.35 1.365-.428 1.616-2.168v-7.53c.343-.245.344-.649.256-.826-.654-1.962-2.658-3.028-4.163-3.975-.1-.222-.138-.295 0-.515.735-.146.715-.567 0-.748v-1.45h-2.526zm23.747 2.404-2.569 1.478 1.549 2.551 1.622-.012c.361-.016 1.002-.558.872-1.394zm-8.217.858-2.905.047.746.386-.265.558c-.627.953-.842 1.149-.34 2.113.357.687.935 1.668 1.61 2.725-.206-.476-.069-1.03.287-1.56l1.378-2.32.849.524zm5.46 2.499-1.388 2.592 1.388 2.522.006-1.047H188c1.332.083 1.475.034 2.139-1.02a30 30 0 0 0 1.49-2.586c-.313.413-1.028.517-1.522.574l-2.73.006zm-5.458 1.056-.605.923c-.285.496-.235 1.815.598 2.065l3.06-.003-.054-2.963z" style="fill:#000;fill-opacity:1;stroke-width:.0243381" transform="translate(-150.434 -135.635)"/>`;
const _DefaultDesc = `Recycling – plastics`;
const _DefaultTitle = 'Recycling – plastics';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf082RecyclingPlastics = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-082-recycling-plastics`;
    const titleId = `pi-title-pf-082-recycling-plastics`;
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
Pf082RecyclingPlastics.displayName = 'Pf082RecyclingPlastics';
