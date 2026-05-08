// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M123.934 78.851h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-123.934 -78.85)"/><path d="m155.555 91.476 1.11 2.418h6.632l.228-1.17zm1.303 3.341-1.272 1.38h.996a3.363 3.363 0 0 0 3.338 3.748c1.715 0 3.364-1.498 3.362-3.362v-1.765Zm-1.695 6.019c-.976.02-1.514.75-2.1 1.8l-5.22 12.258h3.572l3.478-7.455v7.536h11.674v-12.278c.008-.88-1.061-1.845-1.98-1.831h-2.611l-1.43 3.739h-.39l-1.661-3.77zm-19.578 2.32a.486.486 0 0 0-.487.486v5.172c0 .27.217.486.487.486h2.935v4.35h-1.05l-.607 2.694h-3.171c-.776 0-1.4.624-1.4 1.4s.624 1.4 1.4 1.4h33.402c.776 0 1.4-.625 1.4-1.4 0-.776-.624-1.4-1.4-1.4h-25.122l-.608-2.694h-1.05v-4.35h2.937c.27 0 .486-.217.486-.486v-5.172a.485.485 0 0 0-.486-.486zm3.832.943a2.068 2.068 0 1 1 0 4.136 2.068 2.068 0 0 1 0-4.136" style="fill:#000;stroke-width:3.94633" transform="translate(-123.934 -78.85)"/>`;
const _DefaultDesc = `Quarantine, people`;
const _DefaultTitle = 'Quarantine, people';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf033QuarantinePeople = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-033-quarantine-people`;
    const titleId = `pi-title-tf-033-quarantine-people`;
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
Tf033QuarantinePeople.displayName = 'Tf033QuarantinePeople';
