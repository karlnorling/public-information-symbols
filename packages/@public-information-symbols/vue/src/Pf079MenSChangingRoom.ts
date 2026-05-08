// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { symbolProps } from './SymbolPropsBase';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M116.707 149.401h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-116.707 -149.401)"/><path d="M134.813 157.21c-.704-.003-1.17.166-1.593.538-.482.422-.788 1.104-.772 1.98h.001v.005a.417.417 0 0 0 .834 0l-.006-.36c-.006-.346.205-.745.494-.998.29-.254.693-.368 1.097-.348.562.027 1.047.415 1.155.874.107.46-.08 1.102-1.228 1.77l-.004.001-.004.003c-.365.224-.444.639-.439.887.012.598.036 1.091.052 1.376-.704.193-4.334 1.103-8.448 2.257-1.09.306-1.696 1.124-1.647 1.927.048.804.796 1.485 1.855 1.465 2.394.033 5.596.034 8.82.027 3.225.008 6.429.007 8.822-.026 1.06.02 1.808-.662 1.857-1.465s-.558-1.622-1.649-1.928c-4.341-1.218-8.477-2.265-8.775-2.347-.012-.196-.039-.573-.053-1.3-.002-.12-.003-.134.042-.162 1.327-.775 1.815-1.805 1.612-2.674-.204-.872-1.093-1.475-1.879-1.5l-.144-.004zm19.087.918a2.783 2.783 0 1 0 0 5.566 2.783 2.783 0 0 0 0-5.566m-18.92 5.515c.4.11 4.517 1.154 8.805 2.357.813.228 1.062.715 1.04 1.073-.022.359-.269.696-1.007.682h-.014c-.86.011-1.399.018-8.828.018s-7.952-.007-8.818-.018h-.014c-.738.014-.986-.323-1.008-.682-.021-.358.227-.845 1.04-1.073 4.288-1.203 8.403-2.247 8.804-2.357m15.68.785c-.947.123-1.151.687-1.41 1.315l-3.403 10.78c-.206.653.097 1.326.679 1.51s1.216-.194 1.422-.846l2.816-8.916v6.196l-2.663 18.26a1.55 1.55 0 0 0 1.314 1.762l.037.005a1.55 1.55 0 0 0 1.763-1.313l2.03-13.925c.013-.447 1.29-.465 1.323.013l2.029 13.912a1.55 1.55 0 0 0 1.762 1.313l.037-.005a1.55 1.55 0 0 0 1.315-1.762l-2.663-18.26v-6.196l2.815 8.916c.206.652.84 1.03 1.423.846.582-.184.885-.857.679-1.51l-3.404-10.78c-.255-.725-.761-1.3-1.41-1.315h-5.274z" style="stroke-width:1.01549" transform="translate(-116.707 -149.401)"/>`;
const _DefaultDesc = `Men’s changing room`;
const _DefaultTitle = 'Men’s changing room';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Pf079MenSChangingRoom = defineComponent({
  name: 'Pf079MenSChangingRoom',
  inheritAttrs: false,
  props: {
    ...symbolProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `pi-desc-pf-079-men-s-changing-room`;
      const titleId = `pi-title-pf-079-men-s-changing-room`;
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
