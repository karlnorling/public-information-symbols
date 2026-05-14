// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M149.479 55.57h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-149.479 -55.57)"/><path d="m186.506 65.05-2.882.011c-.776-.023-1.119.146-1.65 1.059l-1.234 2.222 2.53 1.493 2.13-3.62c.408-.682.538-.808 1.106-1.166m.397.333c-.21.009-.428.09-.65.26-.444.414-.974 1.323-1.015 1.567l.719 1.25-.954.452 2.945.042 1.488-2.604-.91.646-.248-.52c-.354-.663-.838-1.115-1.375-1.093m2.9 3.713-2.568 1.479 1.548 2.551 1.622-.012c.362-.016 1.003-.558.873-1.395zm-8.217.859-2.904.047.746.386-.265.558c-.627.953-.842 1.148-.34 2.113.357.687.934 1.668 1.61 2.724-.207-.475-.07-1.03.286-1.56l1.379-2.32.848.525zm5.46 2.498-1.387 2.592 1.387 2.523.006-1.047h.639c1.332.082 1.475.034 2.14-1.02.418-.664.922-1.471 1.49-2.586-.313.413-1.029.517-1.522.574l-2.73.006zm-5.458 1.057-.604.922c-.286.497-.235 1.815.598 2.065l3.06-.002-.055-2.963zm-14.371 3.53c-1.729-.04-3.836 1.473-5.263 3.78-1.862 3.009-1.969 6.362-.237 7.489 1.731 1.127 4.645-.4 6.508-3.41 1.862-3.01 1.968-6.364.236-7.49a2.35 2.35 0 0 0-1.244-.369m.318 3.064c.525-.007.998.355 1.114.89a1.125 1.125 0 0 1-.864 1.34c-1.06.255-3.062.494-3.347-.267-.227-.617 1.526-1.646 2.87-1.937a1 1 0 0 1 .227-.026m3.52.467c-.128 1.633-.76 3.444-1.775 5.086-1.245 2.011-2.945 3.576-4.628 4.259l16.087 8.694c5.432 2.383 8.37-9.247 4.738-11.385-.636-.495-9.052-3.253-9.052-3.253l-.32-.205 4.158 4.252-.984.962z" style="fill:#000;fill-opacity:1;stroke-width:.0243381" transform="translate(-149.479 -55.57)"/>`;
const _DefaultDesc = `Recycling – cans`;
const _DefaultTitle = 'Recycling – cans';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf063RecyclingCans = defineComponent({
  name: 'Pf063RecyclingCans',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-063-recycling-cans`;
      const titleId = `pi-title-pf-063-recycling-cans`;
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
