// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M189.644 71.41h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-189.644 -71.41)"/><path d="M216.28 81.726a.91.91 0 0 0-.909.91V83.8h-3.7v11.074h11.346V83.8h-3.7v-1.165a.91.91 0 0 0-.91-.91zm.4.71h1.329c.315 0 .568.253.568.568v.797h-2.465v-.797c0-.315.253-.569.568-.569m-6.333 1.365c-.677 0-1.22.544-1.22 1.22v8.633c0 .676.543 1.22 1.22 1.22h.215V83.802Zm13.78 0v11.074h.214c.676 0 1.22-.545 1.22-1.221v-8.632c0-.677-.544-1.221-1.22-1.221zm-16.939 12.906c-1.943.05-2.267.97-2.889 2.329l-3.396 7.417v4.81H205a3 3 0 0 0-.02.298 2.45 2.45 0 0 0 2.45 2.45 2.45 2.45 0 0 0 2.45-2.45 3 3 0 0 0-.018-.299h13.34a3 3 0 0 0-.02.299 2.45 2.45 0 0 0 2.45 2.45 2.45 2.45 0 0 0 2.45-2.45 3 3 0 0 0-.019-.299h3.24c-.013-3.906 0-7.835 0-11.726.034-1.974-.998-2.829-2.83-2.829zm1.457 1.838c.204.002.207.034.21.257v4.694c-.004.213-.032.246-.283.247h-4.208l2.228-5.197z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.982882;stroke-opacity:1" transform="translate(-189.644 -71.41)"/>`;
const _DefaultDesc = `Baggage delivery`;
const _DefaultTitle = 'Baggage delivery';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf068BaggageDelivery = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-068-baggage-delivery`;
    const titleId = `pi-title-pf-068-baggage-delivery`;
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
Pf068BaggageDelivery.displayName = 'Pf068BaggageDelivery';
