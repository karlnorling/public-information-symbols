// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M134.283 135.348H187.2v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-134.283 -135.348)"/><path d="M149.467 145.164q-.002 15.292-.001 30.585h-5.127v2.7h7.828v-30.01h17.152v30.01h7.826v-2.7h-5.127v-30.585zm6.925.673h3.414v1.847h-3.414zm5.285 0h3.415v1.847h-3.415zm.69.38v1.029h2.315v-1.029zm-1.63 4.329a2.127 2.127 0 1 0 .001 4.253 2.127 2.127 0 0 0 0-4.253m-2.474 4.813c-.724.094-.88.525-1.077 1.005l-2.6 8.235c-.158.498.073 1.013.518 1.153s.93-.148 1.087-.646l2.15-6.811v4.733l-2.033 13.95a1.185 1.185 0 0 0 1.003 1.346l.029.004a1.185 1.185 0 0 0 1.346-1.003l1.552-10.638c.01-.342.985-.355 1.01.009l1.55 10.628a1.185 1.185 0 0 0 1.346 1.004l.029-.004a1.185 1.185 0 0 0 1.003-1.347l-2.034-13.949v-4.734l2.151 6.811c.157.499.642.787 1.087.647s.676-.655.519-1.154l-2.6-8.235c-.195-.554-.583-.992-1.078-1.004h-4.028z" style="stroke-width:.775771" transform="translate(-134.283 -135.348)"/>`;
const _DefaultDesc = `Security check`;
const _DefaultTitle = 'Security check';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf037SecurityCheck = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-037-security-check`;
    const titleId = `pi-title-tf-037-security-check`;
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
Tf037SecurityCheck.displayName = 'Tf037SecurityCheck';
