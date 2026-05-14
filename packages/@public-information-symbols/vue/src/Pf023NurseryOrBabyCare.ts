// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M16.832 155.574h52.917v52.917H16.832z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-16.832 -155.574)"/><path d="M30.082 164.026c-.048.202.204.452.181.53-.048.168-.867.672-.864 1.103.003.353.616.815.616.815v.463h-1.488v.926h1.025s-.623.288-.893.496c-.29.224-.594.467-.76.794-.086.17-.093.372-.1.562-.094 2.948-.115 6.256 0 8.93.014.356 1.076.858 1.621.959.299.052.786.04 1.122.023.335.017.822.03 1.12-.023.546-.1 1.608-.603 1.621-.96.116-2.673.095-5.98 0-8.93-.006-.19-.013-.392-.099-.561-.165-.327-.47-.57-.76-.794-.27-.208-.893-.496-.893-.496h1.025v-.926h-1.488v-.463s.613-.462.616-.815c.003-.43-.816-.935-.864-1.104-.023-.077.23-.327.181-.529-.25-.45-.734-.426-.92 0m18.19.06a2.876 2.876 0 1 0 0 5.752 2.876 2.876 0 0 0 0-5.753m-17.892 5.07.161.001.426.002v.008c.908.04 1.391.219 1.385.858.053 2.545.006 5.183 0 7.857 0 .129-.076.256-.164.35a.56.56 0 0 1-.264.153c-.361.097-.967.075-1.382.044-.416.031-1.022.053-1.384-.044a.56.56 0 0 1-.264-.152c-.087-.095-.163-.222-.163-.351l-.005-1.204h.659v-1.19h-.666l-.006-1.063h.672v-1.191h-.677v-1.062h.677v-1.19h-.67l.016-.958c-.006-.638.477-.817 1.385-.857v-.008l.265-.002zm20.385.942c-.79.008-1.622.502-2.643 1.623a978 978 0 0 1-4.01 5.514l-4.691.57a.964.964 0 0 0-.86 1.048.957.957 0 0 0 1.05.86l5.352-.535q.155-.016.29-.076l.373-.034.364-.199 2.348-3.638s1.463 2.544 2.216 3.804c1.06 1.775 1.807 3.8 3.24 5.291.105.108.233.197.371.254l.49 14.2c.03.878.708 1.587 1.587 1.587.88 0 1.563-.709 1.588-1.588l.414-14.972.049-.043c.267-.262.367-.663.463-1.025.09-.343.116-.705.099-1.058a4.3 4.3 0 0 0-.232-1.224c-1.04-2.848-2.689-5.472-4.72-8.278-1.18-1.298-2.123-2.091-3.138-2.081m-7.415 10.548a.5.5 0 0 0-.105.009c-1.202.242-2.161.286-3.44.827-.195.082-.257.354-.298.562-.04.207-.007.43.066.628.256.691 1.257 1.82 1.257 1.82h-4.167s.58-1.83.695-2.779c-.221-.636-.844-.631-1.092-.165-.491 1.272-.918 2.682-1.323 4.134-.122.439-.091.98.166 1.356.499.512 1.53.545 2.284.577l2.825.03c1.047-.014 2.433 0 3.027-.706.218-.277.365-.64.363-.992-.002-.342-.199-.66-.363-.96-.444-.808-1.654-2.215-1.654-2.215l-.1-.397s1.23-.238 2.184-.43c.307-.062.412-.601.297-.893-.088-.225-.372-.402-.623-.406zm-10.606 3.813a1.604 1.604 0 1 0 0 3.208 1.604 1.604 0 0 0 0-3.208m-2.106 4.322c-.31 0-.56.23-.56.514 0 .286.25.515.56.515h14.595c.31 0 .56-.23.56-.515s-.25-.514-.56-.514z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:2.2" transform="translate(-16.832 -155.574)"/>`;
const _DefaultDesc = `Nursery or baby care`;
const _DefaultTitle = 'Nursery or baby care';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf023NurseryOrBabyCare = defineComponent({
  name: 'Pf023NurseryOrBabyCare',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-023-nursery-or-baby-care`;
      const titleId = `pi-title-pf-023-nursery-or-baby-care`;
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
