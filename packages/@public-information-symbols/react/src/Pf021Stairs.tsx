// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M156.026 53.324h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-156.026 -53.324)"/><path d="M188.709 60.561a2.023 2.023 0 1 0 0 4.046 2.023 2.023 0 0 0 0-4.046m-.788 4.85c-.486-.015-.981.183-1.358.673l-2.615 3.402a.7.7 0 0 0-.127.273.7.7 0 0 0-.026.134l-.49 4.953a.68.68 0 0 0 .611.745.68.68 0 0 0 .745-.61l.453-4.59.004-.005.92-1.197c-.153 5.619-.812 11.099-1.406 16.708a1.237 1.237 0 0 0 1.102 1.364 1.24 1.24 0 0 0 1.364-1.103l1.116-10.518q.066-.03.128-.066l3.171 2.844-.716 4.092c-.1.567.336 1.112.903 1.212.568.1 1.105-.278 1.204-.845l.854-4.88a1.04 1.04 0 0 0-.184-.793 1 1 0 0 0-.178-.203c-1.37-1.216-2.556-2.184-3.924-3.392l.093-1.603 2.58 2.185a.68.68 0 1 0 .896-1.026l-3.294-3.103-.028-2.753c.026-1.054-.87-1.866-1.798-1.897zm-16.88 4.539a2.023 2.023 0 0 0-2.023 2.023 2.023 2.023 0 0 0 2.023 2.023 2.023 2.023 0 0 0 2.022-2.023 2.023 2.023 0 0 0-2.022-2.023m.529 4.47a1.815 1.815 0 0 0-1.819 1.82v3.096l-3.4 2.829a.715.715 0 0 0-.093 1.01l.015.018a.716.716 0 0 0 1.01.093l2.468-2.053v12.585c0 .65.524 1.174 1.174 1.174s1.174-.524 1.174-1.174v-4.4l2.417 1.908a1.17 1.17 0 0 0 1.649-.196 1.17 1.17 0 0 0-.196-1.65l-3.87-3.054v-.335l1.29-2.046v-5.752l.996 1.372.263 4.443a.716.716 0 0 0 .759.674l.023-.001a.716.716 0 0 0 .674-.759l-.276-4.656a.7.7 0 0 0-.172-.427l-.04-.062c-.954-1.183-1.827-2.583-2.635-3.788a1.81 1.81 0 0 0-1.411-.668m17.154 10.739v3.828h-7.804v4.045h-7.409v3.57h-7.464v2.401h9.865v-3.572h7.408v-4.044h7.805V87.56h7.797v-2.401z" style="color:#000;fill:#000;-inkscape-stroke:none" transform="translate(-156.026 -53.324)"/>`;
const _DefaultDesc = `Stairs`;
const _DefaultTitle = 'Stairs';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf021Stairs = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-021-stairs`;
    const titleId = `pi-title-pf-021-stairs`;
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
Pf021Stairs.displayName = 'Pf021Stairs';
