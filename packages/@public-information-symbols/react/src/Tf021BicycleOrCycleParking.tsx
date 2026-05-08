// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M162.135 117.74h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-162.135 -117.74)"/><path d="M168.688 125.717v26.151h3.95v-9.502h5.554c4.578 0 8.326-3.747 8.326-8.325s-3.748-8.324-8.326-8.324h-6.372zm3.95 3.946h5.554c2.46 0 4.38 1.918 4.38 4.378s-1.92 4.38-4.38 4.38h-5.554zm14.923 17.034a.6.6 0 0 0 0 1.2h1.325l-1.792 4.153a5.4 5.4 0 0 0-1.596-.24 5.444 5.444 0 0 0-5.436 5.433 5.446 5.446 0 0 0 5.436 5.436 5.445 5.445 0 0 0 5.435-5.436 5.44 5.44 0 0 0-2.738-4.715l.477-1.106 6.457 6.5h2.542c.335 2.676 2.627 4.757 5.391 4.757a5.446 5.446 0 0 0 5.436-5.436 5.444 5.444 0 0 0-5.436-5.433c-.597 0-1.171.097-1.71.277l-1.479-3.16h-.146l.474-1.03h1.17a.6.6 0 0 0 0-1.2h-3.67a.6.6 0 0 0 0 1.2h1.18l-.475 1.03h-8.656l.444-1.03h1.037a.6.6 0 0 0 0-1.2zm1.67 3.43h8.623l-2.78 6.037-5.867-5.907-.024-.019zm9.912.068 1.12 2.394a5.44 5.44 0 0 0-2.609 4.133h-1.515zm-13.645 2.814q.583.002 1.117.148l-1.623 3.76a.6.6 0 1 0 1.102.477l1.624-3.76a4.22 4.22 0 0 1 2.014 3.61 4.226 4.226 0 0 1-4.234 4.234 4.226 4.226 0 0 1-4.234-4.235 4.225 4.225 0 0 1 4.234-4.234m17.564 0a4.225 4.225 0 0 1 4.235 4.234 4.226 4.226 0 0 1-4.235 4.235 4.224 4.224 0 0 1-4.18-3.557h3.881c.767.03 1.163-.39.816-1.079l-1.715-3.662a4.3 4.3 0 0 1 1.198-.171m-2.29.668 1.425 3.045h-3.337a4.22 4.22 0 0 1 1.913-3.045" style="color:#000;fill:#000;stroke-width:1.2;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-162.135 -117.74)"/>`;
const _DefaultDesc = `Bicycle or cycle parking`;
const _DefaultTitle = 'Bicycle or cycle parking';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tf021BicycleOrCycleParking = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-tf-021-bicycle-or-cycle-parking`;
    const titleId = `pi-title-tf-021-bicycle-or-cycle-parking`;
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
Tf021BicycleOrCycleParking.displayName = 'Tf021BicycleOrCycleParking';
