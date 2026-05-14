// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { SymbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M47.189 106.727h52.917v52.917H47.189z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-47.19 -106.727)"/><path d="M70.82 114.457a2.844 2.844 0 0 0-2.844 2.844 2.844 2.844 0 0 0 2.845 2.844 2.844 2.844 0 0 0 2.844-2.844 2.844 2.844 0 0 0-2.844-2.844m-2.88 6.547a90 90 0 0 0-1.352.014.94.94 0 0 0-.661.319c-3.009 3.394-4.814 7.582-7.095 11.227a.923.923 0 0 0 .291 1.276.923.923 0 0 0 1.276-.292l4.587-7.307.185.017.065.344c-.369 1.721-1.21 3.5-1.34 5.212l-1.383 18.345a1.435 1.435 0 0 0 1.326 1.543 1.435 1.435 0 0 0 1.542-1.326l1.106-14.655c.014-.457.23-.706.632-.735.528.01.654.22.744.733l1.443 6.477-.01 8.278c-.002.797.639 1.439 1.436 1.44s1.439-.64 1.44-1.437l.01-7.055s0-1.226-.02-2.022c-.58-3.427-1.294-5.6-1.982-8.317l1.686-7.496c.091-.35.158-.513.315-.678.071-.093.228-.018.302.1l2.011 2.863 6.227 2.92a.923.923 0 0 0 1.232-.44.923.923 0 0 0-.44-1.231l-5.937-2.81-1.95-2.73-.87-1.505s-.35-.588-.624-.775a1.5 1.5 0 0 0-.817-.258c-1.195-.015-2.141-.041-3.376-.039zm13.53 11.874-1.786 1.208 1.82 1.108 1.752-1.108zm-4.612 2.46-1.492.148 1.588 16.253H87.02l1.585-16.253-1.492-.147-1.455 14.9h-7.346zm5.836.765-1.786 1.207 1.819 1.108 1.753-1.108zm-1.19 6.267-1.787 1.208 1.82 1.108 1.752-1.108zm-.1 4.796-1.786 1.207 1.82 1.108 1.752-1.108z" style="stroke-width:1.5" transform="translate(-47.19 -106.727)"/>`;
const _DefaultDesc = `Trash box or Litter bin or Rubbish bin`;
const _DefaultTitle = 'Trash box or Litter bin or Rubbish bin';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf027TrashBoxOrLitterBinOrRubbishBin = React.memo<SymbolProps>(
  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const descId = `pi-desc-pf-027-trash-box-or-litter-bin-or-rubbish-bin`;
    const titleId = `pi-title-pf-027-trash-box-or-litter-bin-or-rubbish-bin`;
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
Pf027TrashBoxOrLitterBinOrRubbishBin.displayName = 'Pf027TrashBoxOrLitterBinOrRubbishBin';
