// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.78 55.078h52.917v52.917H90.78z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.78 -55.078)"/><path d="M127.463 63.344a2.783 2.783 0 1 0 0 5.567 2.783 2.783 0 0 0 0-5.567m-20.46.194a2.783 2.783 0 1 0 0 5.566 2.783 2.783 0 0 0 0-5.566m17.22 6.106c-.948.123-1.152.688-1.41 1.316l-3.404 10.78c-.206.652.097 1.325.68 1.509.582.184 1.216-.193 1.422-.846l2.815-8.916v6.196l-2.663 18.26a1.55 1.55 0 0 0 1.315 1.763l.037.005a1.55 1.55 0 0 0 1.762-1.314l2.03-13.924c.013-.447 1.291-.465 1.323.012l2.029 13.912a1.55 1.55 0 0 0 1.763 1.314l.037-.005a1.55 1.55 0 0 0 1.314-1.763l-2.663-18.26v-6.196l2.815 8.916c.206.653.84 1.03 1.423.846.582-.184.885-.857.68-1.51l-3.405-10.78c-.254-.725-.76-1.299-1.409-1.315h-5.274zm-20.46.193c-.947.124-1.151.688-1.409 1.316l-3.404 10.78c-.206.652.097 1.325.68 1.51.581.183 1.216-.194 1.422-.847l2.651-8.396 1.017 3.605a4 4 0 0 0-.239.61l-3.704 11.46c-.183.569.384 1.078.862 1.078h2.635l1.162 7.27c.132.824.702 1.505 1.573 1.505s1.441-.681 1.573-1.505l1.162-7.27h2.635c.478 0 1.045-.51.862-1.077l-3.705-11.46a4 4 0 0 0-.238-.611l1.017-3.605 2.651 8.396c.206.653.84 1.03 1.423.846.582-.184.885-.857.679-1.51l-3.404-10.779c-.254-.725-.761-1.3-1.41-1.316h-5.273z" style="stroke-width:1.01549" transform="translate(-90.78 -55.078)"/>`;
const _DefaultDesc = `Toilets - unisex`;
const _DefaultTitle = 'Toilets - unisex';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf003ToiletsUnisex = defineComponent({
  name: 'Pf003ToiletsUnisex',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-003-toilets-unisex`;
      const titleId = `pi-title-pf-003-toilets-unisex`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
