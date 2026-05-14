// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M129.441 175.901h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-129.44 -175.9)"/><path d="M141.31 200.69c-1.177 1.147-2.4 2.243-3.624 3.339-.541.45.426.726.718.546 1.38-.667 1.878-1.076 2.778-1.735l.064 12.283c-.002.398.423 1.274.99 1.334l1.656.021-.022-.882-.715.019c-.284-.006-.33-.18-.317-.406l1.28-13.795.01-.121c.24-.136.215-.069.32.075.131.367.395.189.681.082 1.993-.835 3.175-1.502 5.366-1.104-.056.765.076 1.45.28 2.173l-1.441 12.239c-.658.522-.687.816-.667 1.656l.129.129 3.29-.065 1.507-8.152.58 6.54c-.35.547-.344.874-.344 1.548l3.57-.043c-.034-3.947-.331-7.873-.653-11.803-.013-.201.003-.11.137-.22 2.888 1.325 5.624 1.36 8.712 1.376.38 3.134-.783 5.991-1.614 8.969l-.408.452c-.58.315-.538.667-.538 1.29l3.657-.021c1.075-3.09 1.87-6.252 2.667-9.421.241.63.634 1.121 1.054 1.635l.459 6.05c.075.49-.344.72-.373 1.08v.613l3.57-.022c.055-3.311-.346-6.694-.594-9.732-.064-.831-.134-1.935-.008-2.765 1.619-6.331 1.314-12.76-5.746-14.785-1.682-.457-3.329.075-6.365.28-3.658.135-5.257-.82-8.025-1.097-3.64-.256-4.708.202-6.75.589-3.109.541-4.546 8.052-5.27 11.852z" style="fill:#000;stroke-width:1.5" transform="translate(-129.44 -175.9)"/>`;
const _DefaultDesc = `Zoo`;
const _DefaultTitle = 'Zoo';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Tc007Zoo = defineComponent({
  name: 'Tc007Zoo',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-tc-007-zoo`;
      const titleId = `pi-title-tc-007-zoo`;
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
