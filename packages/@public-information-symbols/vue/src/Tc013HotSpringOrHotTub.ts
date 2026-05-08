// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M303.924 212.036h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-303.924 -212.036)"/><path d="M326.46 221.857a.86.86 0 0 0-.413.12c-4.127 2.256-2.724 5.354-.547 8.553 1.198 2.16 1.797 3.829-.396 5.76-.539.487-.218.813.358.504 4.126-2.255 2.724-5.353.548-8.55-1.198-2.161-1.798-3.831.395-5.763.388-.35.33-.616.054-.624m4.627 0a.86.86 0 0 0-.412.12c-4.127 2.256-2.724 5.354-.548 8.553 1.198 2.16 1.798 3.829-.395 5.76-.54.487-.218.813.358.504 4.126-2.255 2.724-5.353.548-8.55-1.198-2.161-1.799-3.831.395-5.763.387-.35.33-.616.054-.624m4.628 0a.86.86 0 0 0-.412.12c-4.127 2.256-2.724 5.354-.547 8.553 1.197 2.16 1.797 3.829-.396 5.76-.54.487-.218.813.358.504 4.126-2.255 2.724-5.353.548-8.55-1.198-2.161-1.799-3.831.395-5.763.388-.35.33-.616.054-.624m-13.908 15.985a1.984 1.984 0 0 0-1.984 1.984 1.984 1.984 0 0 0 1.984 1.984 1.984 1.984 0 0 0 1.984-1.984 1.984 1.984 0 0 0-1.984-1.984m17.152 0a1.984 1.984 0 0 0-1.984 1.984 1.984 1.984 0 0 0 1.984 1.984 1.984 1.984 0 0 0 1.984-1.984 1.984 1.984 0 0 0-1.984-1.984m-8.576 2.075a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-10.88 2.662c-.946 0-1.707.762-1.707 1.708v3.828c.518-.057.815-.268 1.238-.624 1.009.845 1.82.777 2.714 0h.001c.998.835 1.673.783 2.714 0 .453.38.762.596 1.355.633v-3.837c0-.946-.762-1.708-1.708-1.708zm17.152 0c-.946 0-1.708.762-1.708 1.708v3.828c.519-.057.815-.268 1.238-.624 1.009.845 1.821.777 2.714 0h.001c.998.835 1.673.783 2.714 0 .453.38.762.596 1.354.633v-3.837c0-.946-.761-1.708-1.707-1.708zm6.615.378c.415.355.68.897.68 1.508v.429c1.428.802 2.181 1.717 2.182 2.648-.001 2.88-7.052 5.215-15.75 5.216-8.697 0-15.748-2.336-15.749-5.216.003-.93.756-1.842 2.181-2.643v-.434c0-.608.263-1.148.675-1.504-3 1.34-4.667 3.097-4.669 4.92 0 4.005 7.863 7.252 17.563 7.252s17.561-3.247 17.561-7.251c0-1.826-1.67-3.585-4.674-4.925m-14.583 1.754c-.946 0-1.707.761-1.707 1.707v1.564c.238-.107.446-.268.7-.481 1.008.844 1.82.776 2.714 0v-.001c.998.835 1.674.783 2.715 0 .245.206.447.364.676.47v-1.552c0-.946-.761-1.707-1.707-1.707z" style="display:inline;fill:#000;stroke-width:1.7" transform="translate(-303.924 -212.036)"/>`;
const _DefaultDesc = `Hot spring or Hot tub`;
const _DefaultTitle = 'Hot spring or Hot tub';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tc013HotSpringOrHotTub = defineComponent({
  name: 'Tc013HotSpringOrHotTub',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tc-013-hot-spring-or-hot-tub`;
      const titleId = `pi-title-tc-013-hot-spring-or-hot-tub`;
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
