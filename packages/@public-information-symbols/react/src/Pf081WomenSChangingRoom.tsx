// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M89.175 180.03h52.917v52.917H89.175z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-89.175 -180.03)"/><path d="M107.281 188.15c-.704-.001-1.17.168-1.593.54-.482.422-.787 1.104-.772 1.981h.001v.004a.417.417 0 0 0 .834 0l-.006-.36c-.006-.347.205-.745.494-.998.29-.254.693-.368 1.097-.348.562.027 1.047.415 1.155.875.107.46-.08 1.1-1.228 1.77h-.004l-.004.003c-.364.224-.444.638-.439.887.012.598.036 1.091.052 1.376-.703.193-4.334 1.103-8.448 2.257-1.09.306-1.696 1.124-1.647 1.927s.796 1.486 1.855 1.466c2.394.032 5.596.033 8.82.026 3.225.008 6.429.007 8.823-.026 1.059.02 1.807-.662 1.856-1.465.048-.803-.558-1.622-1.649-1.928-4.341-1.218-8.477-2.265-8.775-2.347-.012-.196-.039-.573-.053-1.301-.002-.12-.003-.133.042-.16 1.327-.776 1.815-1.806 1.612-2.676-.204-.871-1.093-1.474-1.879-1.5zm19.087.488a2.783 2.783 0 1 0 0 5.566 2.783 2.783 0 0 0 0-5.566m-18.92 5.947c.4.11 4.517 1.154 8.805 2.357.813.228 1.062.715 1.04 1.073-.021.359-.268.696-1.006.682h-.014c-.86.012-1.4.018-8.829.018s-7.952-.007-8.818-.018h-.014c-.738.014-.986-.324-1.008-.682-.021-.358.227-.845 1.04-1.073 4.288-1.203 8.403-2.247 8.804-2.357m15.68.353c-.947.123-1.151.687-1.41 1.315l-3.403 10.78c-.206.652.097 1.326.679 1.51s1.217-.194 1.423-.847l2.651-8.396 1.017 3.605c-.093.177-.167.39-.239.61l-3.704 11.46c-.183.569.384 1.078.862 1.078h2.635l1.162 7.27c.131.824.701 1.505 1.573 1.505.871 0 1.441-.681 1.573-1.505l1.162-7.27h2.635c.477 0 1.045-.51.861-1.077l-3.704-11.46a4 4 0 0 0-.238-.61l1.017-3.606 2.651 8.396c.206.653.84 1.03 1.423.846.582-.183.885-.857.679-1.509l-3.404-10.78c-.254-.725-.761-1.3-1.41-1.315h-5.273z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.650646;stroke-opacity:1" transform="translate(-89.175 -180.03)"/>`;
const _DefaultDesc = `Women’s changing room`;
const _DefaultTitle = 'Women’s changing room';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf081WomenSChangingRoom = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-081-women-s-changing-room`;
    const titleId = `pi-title-pf-081-women-s-changing-room`;
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
Pf081WomenSChangingRoom.displayName = 'Pf081WomenSChangingRoom';
