// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M142.69 68.016h52.917v52.917H142.69z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-142.69 -68.016)\"/><path d=\"M169.149 75.224a3.11 3.11 0 0 0-3.112 3.111 3.11 3.11 0 0 0 3.112 3.112 3.11 3.11 0 0 0 3.11-3.112 3.11 3.11 0 0 0-3.11-3.111m-.82 7.398.002.048c-.566.009-1.253.012-2.038.002-1.443.04-2.658 1.12-3.35 2.383-1.505 2.82-2.755 5.425-2.912 9.342-.022.537.344 1.115.8 1.4.736.407 1.323.113 1.38.329.216.82-.188 2.918.62 7.071.562 2.785 1.538 6.87 2.446 8.952.302.578.331 1.226 1.306 1.522.718.219 1.873-.204 1.978-1.838.02-.23.032-.454.04-.645V100.77a.547.547 0 1 1 1.096 0v10.43c.007.188.02.408.04.633.104 1.634 1.26 2.057 1.978 1.838.974-.296 1.003-.944 1.305-1.522.908-2.082 1.884-6.167 2.447-8.952.807-4.153.403-6.25.62-7.071.056-.216.643.078 1.38-.329.455-.285.821-.863.8-1.4-.158-3.917-1.408-6.522-2.912-9.342-.693-1.263-1.908-2.344-3.351-2.383-.785.01-1.472.007-2.038-.002l.003-.048s-.322.015-.82.03c-.497-.015-.82-.03-.82-.03\" style=\"display:inline;fill:#000;fill-opacity:1;stroke-width:.799999;stroke-linecap:round\" transform=\"translate(-142.69 -68.016)\"/>","width":"200.001","height":"200.001"};
const _title = "Priority facilities for obese people";
const _description = "Priority facilities for obese people";

export const Ac016PriorityFacilitiesForObesePeople = defineComponent({
  name: 'Ac016PriorityFacilitiesForObesePeople',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
