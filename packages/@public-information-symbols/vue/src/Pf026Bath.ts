// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M75.409 84.701h52.917v52.917H75.409z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-75.41 -84.701)\"/><path d=\"M88.722 97.67a3.083 3.083 0 0 0-3.083 3.083 3.083 3.083 0 0 0 3.083 3.083 3.083 3.083 0 0 0 3.082-3.083 3.083 3.083 0 0 0-3.082-3.083m27.724 7.188.526 2.026h1.68l.527-2.026zm-27.785.03c-1.74-.01-3.008 1.906-2.267 5.118h7.653c.01.021-.983-1.148-1.647-2.195-1.139-2.01-2.549-2.917-3.74-2.923m28.396 2.6v.794c-1.288-.081-2.001-.143-3.32-.155-1.481.102-1.338 1.26-.923 2.23l.809-.015c-.039-.432-.046-.71.044-.816.291-.346 2.398.217 3.412.152l-.004 1.799h-33.41c-.834 0-1.505.672-1.505 1.506s.671 1.505 1.505 1.505c1.101.108 1.088.926 1.566 1.948l3.134 6.708c.353.756 1.2 1.506 2.034 1.506h22.937c.834 0 1.682-.75 2.035-1.506l3.134-6.708c.478-1.022.464-1.84 1.565-1.948.834 0 1.506-.671 1.506-1.505s-.672-1.506-1.506-1.506h-1.5v-3.988z\" style=\"display:inline;stroke-width:.270704\" transform=\"translate(-75.41 -84.701)\"/>","width":"200.001","height":"200.001"};
const _title = "Bath";
const _description = "Bath";

export const Pf026Bath = defineComponent({
  name: 'Pf026Bath',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
