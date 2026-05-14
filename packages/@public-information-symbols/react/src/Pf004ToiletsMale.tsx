// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.846 69.183h52.917V122.1H90.846z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.846 -69.183)"/><path d="M117.299 77.45a2.783 2.783 0 1 0 0 5.567 2.783 2.783 0 0 0 0-5.567m-3.24 6.3c-.947.123-1.152.688-1.41 1.316l-3.403 10.78c-.206.652.096 1.325.679 1.509.582.184 1.216-.194 1.422-.846l2.816-8.916v6.196l-2.663 18.26a1.55 1.55 0 0 0 1.314 1.763l.037.005a1.55 1.55 0 0 0 1.763-1.314l2.03-13.924c.013-.448 1.29-.465 1.323.012l2.028 13.912a1.55 1.55 0 0 0 1.763 1.314l.037-.005a1.55 1.55 0 0 0 1.314-1.763l-2.663-18.26v-6.196l2.816 8.916c.206.652.84 1.03 1.422.846.583-.184.886-.857.68-1.51l-3.404-10.78c-.255-.725-.761-1.299-1.41-1.315h-5.274z" style="stroke-width:1.01549" transform="translate(-90.846 -69.183)"/>`;
const _DefaultDesc = `Toilets - male`;
const _DefaultTitle = 'Toilets - male';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf004ToiletsMale = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-004-toilets-male`;
    const titleId = `pi-title-pf-004-toilets-male`;
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
Pf004ToiletsMale.displayName = 'Pf004ToiletsMale';
