// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M161.251 111.574h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-161.251 -111.574)"/><path d="m181.542 121.096-.012.025 6.038 6.333 6.036-6.331-.012-.028zm-.552 1.269-1.641 3.78h-.11l4.326 7.898v.002c.059.108.077.132.126.22l2.924-6zm13.155.003-5.624 5.899 2.922 5.998c.05-.088.068-.111.127-.22l.002-.001 4.325-7.898h-.112zm-18.238 3.778a.946.946 0 0 0-.948.948v19.04c-.592-.006-1.216-.285-1.893-.603-.685-.321-1.425-.68-2.257-.68v-.001c-.831 0-1.57.36-2.256.681s-1.315.604-1.913.604a3 3 0 0 1-.497-.049v2.007c.171.022.338.037.497.037.831 0 1.571-.36 2.256-.682.685-.32 1.315-.603 1.913-.603s1.23.282 1.915.603c.685.322 1.424.682 2.256.682s1.57-.36 2.256-.682c.685-.32 1.316-.603 1.913-.603.598 0 1.229.282 1.914.603.685.322 1.425.682 2.256.682.832 0 1.571-.36 2.256-.682.686-.32 1.316-.603 1.914-.603s1.229.282 1.914.603c.685.322 1.424.682 2.256.682s1.571-.36 2.257-.682c.685-.32 1.315-.603 1.913-.603s1.229.282 1.914.603c.685.322 1.424.682 2.256.682.828-.02 1.725-.35 2.5-.705.686-.321 1.316-.603 1.914-.603s1.229.282 1.914.603 1.424.682 2.256.682c.238 0 .469-.033.693-.083v-2.02a2.5 2.5 0 0 1-.693.108c-.598 0-1.229-.283-1.914-.604s-1.424-.68-2.256-.68-1.571.359-2.256.68c-.631.227-1.32.531-1.981.61v-19.024a.946.946 0 0 0-.949-.948h-1.906l-4.651 8.495-.002.002c-.209.384-.36.653-.5.86a1.7 1.7 0 0 1-.227.282.76.76 0 0 1-.472.239.8.8 0 0 1-.604-.217c-.107-.108-.148-.193-.187-.267-.08-.15-.13-.277-.201-.409l-.006-.01-2.904-5.956-2.903 5.956-.004.01c-.07.132-.122.26-.2.408-.04.075-.081.16-.188.268-.108.109-.359.246-.604.217a.76.76 0 0 1-.473-.239 1.7 1.7 0 0 1-.226-.283c-.14-.206-.293-.475-.502-.86l-4.653-8.496zm20.408 22.75c-.603 0-1.239.281-1.93.602-.782.356-1.686.685-2.521.705-.839 0-1.584-.36-2.275-.681s-1.328-.603-1.93-.603c-.603 0-1.239.281-1.93.603-.69.32-1.437.681-2.275.681-.839 0-1.585-.36-2.276-.681s-1.326-.603-1.93-.603c-.602 0-1.238.281-1.929.603-.69.32-1.436.681-2.275.681q-.043 0-.085-.002v3.82c0 .525.423.948.948.948h23.32a.946.946 0 0 0 .949-.948v-3.862c-.7-.08-1.337-.384-1.932-.66-.69-.322-1.326-.604-1.93-.604" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.13391;paint-order:fill markers stroke" transform="translate(-161.251 -111.574)"/>`;
const _DefaultDesc = `Laundry service`;
const _DefaultTitle = 'Laundry service';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Cf022LaundryService = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-cf-022-laundry-service`;
    const titleId = `pi-title-cf-022-laundry-service`;
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
Cf022LaundryService.displayName = 'Cf022LaundryService';
