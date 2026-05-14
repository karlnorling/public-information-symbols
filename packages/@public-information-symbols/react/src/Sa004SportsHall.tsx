// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M27.229 52.007h52.917v52.917H27.229z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-27.229 -52.007)"/><path d="M53.687 56.975 37.745 67.133v2.73l15.942-10.16 15.943 10.16v-2.73zM67.29 70.283l-4.077 25.724c-.054.58-.807 1.077-1.188 1.066l-5.014-.302c-.813-.1-1.795.202-1.621 1.157l.146.808c.126.7.876.978 1.51.978h5.104c.887.023 1.819-.499 2.01-1.416l.205-1.016 4.218-26.796zm-23.203.266c-2.924 0-5.293 2.913-5.293 6.506 0 2.808 1.423 5.257 3.476 6.111.63.303 1.256.973 1.264 1.36-.002 2.174.007 4.346 0 6.52l-.552.462v8.449h2.21v-8.449l-.553-.463c.013-2.157.002-4.318 0-6.48.006-.39.807-1.158 1.209-1.374 1.995-1.024 3.533-3.302 3.533-6.136 0-3.593-2.37-6.506-5.294-6.506m0 1.227c2.372 0 4.295 2.364 4.295 5.279s-1.923 5.278-4.295 5.278-4.295-2.363-4.295-5.278c0-2.916 1.923-5.279 4.295-5.279m10.846 9.048a6.957 6.957 0 1 0 0 13.914 6.957 6.957 0 0 0 0-13.914m.38.995a6.14 6.14 0 0 1 3.577 1.432l.003.178-2.468-.053-1.123-.714zm-.817.002.012.975-1.122.713-2.469.053.005-.266a6.14 6.14 0 0 1 3.573-1.475zm2.65 2.33h.027l1.569.044 1.212 1.711-.65 1.56h-.83l-1.577-2.246Zm-4.125.07.677.945-1.176 2.442-1.337.25-1.23-1.872.998-1.622zm1.336 1.373h1.818l1.587 2.21-1.052 1.586h-2.442l-1.033-1.586zm6.176.873.38.104q.156.675.158 1.37a6.1 6.1 0 0 1-.487 2.395l-.746-.59.062-2.111zm-11.057.141 1.009 1.55v1.903s-.698.504-1.01.684a6.14 6.14 0 0 1-.68-2.804q.004-.647.14-1.278zm4.543 3.593h2.842l.562.784-1.32 2.237h-1.817l-1.293-1.8zm5.534.276.702.52a6.14 6.14 0 0 1-2.977 2.616l-.363-.462 1.07-1.622zm-8.742.223 1.559.918 1.034 1.595-.462.53a6.14 6.14 0 0 1-3.132-2.431c.283-.158 1-.612 1-.612" style="display:inline;fill:#1f0000;stroke-width:.972618;stroke-linecap:round" transform="translate(-27.229 -52.007)"/>`;
const _DefaultDesc = `Sports hall`;
const _DefaultTitle = 'Sports hall';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Sa004SportsHall = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-sa-004-sports-hall`;
    const titleId = `pi-title-sa-004-sports-hall`;
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
Sa004SportsHall.displayName = 'Sa004SportsHall';
