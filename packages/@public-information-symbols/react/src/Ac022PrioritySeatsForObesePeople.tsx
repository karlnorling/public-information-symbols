// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M119.805 164.544h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-119.805 -164.544)"/><path d="M141.793 170.848a3.506 3.506 0 0 0-3.506 3.506 3.506 3.506 0 0 0 3.506 3.506 3.506 3.506 0 0 0 3.506-3.506 3.506 3.506 0 0 0-3.506-3.506m.359 9.795q-.336 0-.712.062a4.16 4.16 0 0 0-3.43 4.793l1.622 9.79c.377 2.278 2.484 3.42 4.793 3.43.616.003 6.733-.022 7.352-.002l.043.003.233 10.395c.025 1.131.91 2.043 2.043 2.043 1.132 0 1.999-.912 2.044-2.043l.637-13.465c.03-2.515-2.965-3.372-5.716-4.083-.03-3.097-2.443-7.425-6.186-9.967-.972-.58-1.748-.956-2.723-.957m-6.403 19.458v2.108h14.11V200.1z" style="fill:#000;stroke-width:.626924" transform="translate(-119.805 -164.544)"/>`;
const _DefaultDesc = `Priority seats for obese people`;
const _DefaultTitle = 'Priority seats for obese people';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ac022PrioritySeatsForObesePeople = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-022-priority-seats-for-obese-people`;
    const titleId = `pi-title-ac-022-priority-seats-for-obese-people`;
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
Ac022PrioritySeatsForObesePeople.displayName = 'Ac022PrioritySeatsForObesePeople';
