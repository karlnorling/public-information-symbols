// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M70.591 81.948h52.917v52.917H70.591z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-70.591 -81.948)"/><path d="m97.05 87.735-2.088 1.935-.017 2.189 1.357-.999.016 3.634h1.464l.016-3.634 1.357.999-.017-2.19zm-15.458 2.853v33.208h2.713V90.588Zm28.204.047v33.208h2.712V90.635Zm-22.932 5.044v1.124h20.373v-1.124zm16.961 4.162a.48.48 0 0 0-.48.48.48.48 0 0 0 .48.479.48.48 0 0 0 .48-.48.48.48 0 0 0-.48-.48m0 2.013a.48.48 0 0 0-.48.48.48.48 0 0 0 .48.479.48.48 0 0 0 .48-.48.48.48 0 0 0-.48-.48m0 2.013a.48.48 0 0 0-.48.48.48.48 0 0 0 .48.48.48.48 0 0 0 .48-.48.48.48 0 0 0-.48-.48m-9.496 2.948h-3.093v.492h-2.287v10.358l2.287-.001v.492h3.093v-.492h5.409v.492h3.093v-.492h2.286v-10.358l-2.286.001v-.492h-3.093v.492h-5.41zm-2.635.444h2.177v10.453h-2.177zm8.502 0h2.177v10.453h-2.177zm-10.79.492h1.83v2.08h-1.83zm4.923 0h5.409v2.08h-5.41zm8.502 0h1.828v2.08h-1.828zm-13.424 2.524h1.829v1.989h-1.83zm4.922 0h5.409v1.989h-5.41zm8.502 0h1.828v1.989h-1.828zm-13.424 2.432h1.829v1.99h-1.83zm4.922 0h5.409v1.99h-5.41zm8.502 0h1.828v1.99h-1.828zm-13.424 2.434h1.829v2.079h-1.83zm4.922 0h5.409v2.079h-5.41zm8.502 0h1.828v2.079h-1.828zm-15.967 4.87v1.124h20.373v-1.125zm9.454 2.309-.016 3.633-1.357-.998.016 2.189 2.089 1.935 2.088-1.935.016-2.19-1.356 1-.016-3.634z" style="stroke-width:.51536" transform="translate(-70.591 -81.948)"/>`;
const _DefaultDesc = `Elevator for goods`;
const _DefaultTitle = 'Elevator for goods';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf078ElevatorForGoods = defineComponent({
  name: 'Pf078ElevatorForGoods',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-078-elevator-for-goods`;
      const titleId = `pi-title-pf-078-elevator-for-goods`;
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
