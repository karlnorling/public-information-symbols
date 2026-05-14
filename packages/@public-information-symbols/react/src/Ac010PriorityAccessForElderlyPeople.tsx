// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M145.519 75.936h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-145.519 -75.936)"/><path d="M174.576 83.076a2.77 2.77 0 0 0-2.77 2.77 2.77 2.77 0 0 0 2.77 2.772 2.77 2.77 0 0 0 2.772-2.772 2.77 2.77 0 0 0-2.772-2.77m-3.08 6.784c-1.005.14-2 .72-2.316 1.611l-3.218 9.422a1.39 1.39 0 1 0 2.629.897l2.275-6.66v6.455a1.6 1.6 0 0 0-.035.327v18.25c0 .86.692 1.551 1.55 1.551.86 0 1.55-.692 1.55-1.55v-13.756c.008-.533 1.249-.478 1.25 0v13.756c0 .858.692 1.55 1.55 1.55.86 0 1.55-.692 1.55-1.55v-15.64c.211.183.486.293.787.293a1.2 1.2 0 0 0 1.202-1.202V92.9c0-.3.01-.492 0-.785a2.25 2.25 0 0 0-2.256-2.256zm-5.22 13.438-.012.002c-.804.027-1.486.377-1.928.928s-.653 1.275-.656 2.055v15.374h1v-15.373c.003-.6.167-1.095.435-1.43.266-.331.63-.528 1.17-.55.51.011.739.173.924.486.188.317.284.833.271 1.418v.754a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-.733c.016-.696-.074-1.38-.411-1.949-.338-.568-.979-.97-1.782-.982z" style="display:inline;fill:#000;stroke-width:3.394;stroke-linecap:round" transform="translate(-145.519 -75.936)"/>`;
const _DefaultDesc = `Priority access for elderly people`;
const _DefaultTitle = 'Priority access for elderly people';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ac010PriorityAccessForElderlyPeople = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-ac-010-priority-access-for-elderly-people`;
    const titleId = `pi-title-ac-010-priority-access-for-elderly-people`;
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
Ac010PriorityAccessForElderlyPeople.displayName = 'Ac010PriorityAccessForElderlyPeople';
