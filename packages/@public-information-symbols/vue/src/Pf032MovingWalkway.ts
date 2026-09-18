// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M56.825 108.448h52.917v52.917H56.825z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-56.825 -108.448)\"/><path d=\"M81.491 122.41a2.01 2.01 0 0 0-2.007 2.008 2.01 2.01 0 0 0 2.007 2.008 2.01 2.01 0 0 0 2.008-2.008 2.01 2.01 0 0 0-2.008-2.007m7.712.001a2.01 2.01 0 0 0-2.008 2.008 2.01 2.01 0 0 0 2.008 2.008 2.01 2.01 0 0 0 2.008-2.008 2.01 2.01 0 0 0-2.008-2.008m-7.711 4.563a1.91 1.91 0 0 0-1.917 1.916v3.863h3.833v-3.863a1.91 1.91 0 0 0-1.916-1.916m7.711 0a1.91 1.91 0 0 0-1.917 1.916v3.863h3.833v-3.863a1.91 1.91 0 0 0-1.916-1.916m-18.151 7.601c-3.534 0-6.414 2.879-6.414 6.412s2.88 6.415 6.414 6.415h30.878V145.2H71.052a4.18 4.18 0 0 1-4.213-4.213 4.18 4.18 0 0 1 4.213-4.213h30.878v-2.199z\" style=\"color:#000;fill:#000;-inkscape-stroke:none\" transform=\"translate(-56.825 -108.448)\"/>","width":"200.001","height":"200.001"};
const _title = "Moving walkway";
const _description = "Moving walkway";

export const Pf032MovingWalkway = defineComponent({
  name: 'Pf032MovingWalkway',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
