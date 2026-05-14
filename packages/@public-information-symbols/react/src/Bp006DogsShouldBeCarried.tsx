// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M198.864 67.929h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-198.864 -67.929)"/><path d="M225.307 75.467a4.8 4.8 0 0 0-4.798 4.799 4.8 4.8 0 0 0 4.798 4.799 4.8 4.8 0 0 0 4.799-4.799 4.8 4.8 0 0 0-4.799-4.799m-5.75 11.604a6.33 6.33 0 0 0-6.343 6.343v11.244a2.257 2.257 0 0 0 2.262 2.262h3.97v6.387h12.109v-3.655c1.749-1.15 4.86-3.364 5.26-3.749a2.26 2.26 0 0 0 .617-1.556V93.414a6.33 6.33 0 0 0-6.343-6.343zm-.702 4.478 3.747 4.987-4.061 3.089-.753-2.007c-.93-.036-1.896.02-2.776-.33-.242-.363-.46-.73-.611-1.144.671-.465 1.33-.888 2.117-1.145l.047-.894c.566-.378 1.116-.64 1.803-.768l.11-1.506.047-.235zm13.134 3.566c.279-.005.556.071.551.25.003 1.268.012 7.953.012 7.953l-4.108 2.98c.44-2.063.475-3-1.166-4.148h-7.653l-.596-1.223s4.146-3.38 4.334-3.38 8.06 1.067 8.06 1.067v-3.26c.006-.147.287-.234.566-.239" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:1" transform="translate(-198.864 -67.929)"/>`;
const _DefaultDesc = `Dogs should be carried`;
const _DefaultTitle = 'Dogs should be carried';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Bp006DogsShouldBeCarried = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-bp-006-dogs-should-be-carried`;
    const titleId = `pi-title-bp-006-dogs-should-be-carried`;
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
Bp006DogsShouldBeCarried.displayName = 'Bp006DogsShouldBeCarried';
