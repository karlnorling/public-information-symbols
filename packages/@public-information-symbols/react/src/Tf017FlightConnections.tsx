// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M63.708 72.656h52.917v52.917H63.708z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-63.708 -72.656)"/><path d="M77.21 79.143c-.14 0-.28.066-.425.216v.011c-.367.403-.614 1.25-.627 1.825l-.168 4.785-6.088 4.266.02.55c.016.414.108.54.61.456l5.592-1.583.134 3.022-2.531 1.732v1.075l3.484-.934 3.483.934v-1.075l-2.531-1.732.133-3.022 5.593 1.583c.502.085.594-.042.609-.455l.02-.55-6.088-4.267-.168-4.785c-.013-.575-.26-1.422-.627-1.825v-.011c-.143-.15-.283-.216-.424-.216m25.914 0c-.141 0-.281.066-.425.216l-.001.011c-.367.403-.614 1.25-.626 1.825l-.168 4.785-6.088 4.266.02.55c.015.414.107.54.609.456l5.592-1.583.134 3.022-2.531 1.732v1.075l3.484-.934 3.483.934v-1.075l-2.53-1.732.132-3.022 5.593 1.583c.503.085.594-.042.61-.455l.02-.55-6.09-4.267-.167-4.785c-.013-.575-.26-1.422-.626-1.825v-.011c-.144-.15-.284-.216-.425-.216m-12.136 8.475a2.404 2.404 0 1 0 0 4.808 2.404 2.404 0 0 0 0-4.808m-.592 5.515c-.741.056-1.319.32-1.765.941l-2.653 3.645c-.383.476-.534.925-.67 1.482l-1.294 5.32a.873.873 0 0 0 .643 1.058.873.873 0 0 0 1.057-.644l1.492-5.996.551-.764c.137-.161.42-.26.411.138v5.392q0 .166.025.327l-.726 2.201h-6.379a.67.67 0 0 0-.671.672v5.144c0 .372.3.672.671.672h3.424l-2.345 3.292a1.225 1.225 0 0 0 .287 1.712 1.225 1.225 0 0 0 1.712-.288l3.361-4.716h1.34a.67.67 0 0 0 .672-.672v-4.284l.575-1.555c.203-.48.541-.49.743.05l3.666 11.958c.2.65.884 1.013 1.534.814.65-.2 1.013-.884.814-1.534l-4.198-13.694a1 1 0 0 0-.05-.133v-4.332c.005-.305.026-.373.185-.01.123.249.275.457.526.635l4.519 3.212a.867.867 0 0 0 1.212-.205.87.87 0 0 0-.205-1.213l-4.654-3.308-1.627-3.507c-.441-1.039-.989-1.812-2.183-1.81" style="fill:#000;stroke-width:.311071" transform="translate(-63.708 -72.656)"/>`;
const _DefaultDesc = `Flight connections`;
const _DefaultTitle = 'Flight connections';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf017FlightConnections = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-017-flight-connections`;
    const titleId = `pi-title-tf-017-flight-connections`;
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
Tf017FlightConnections.displayName = 'Tf017FlightConnections';
