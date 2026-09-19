// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M151.742 87.25h52.917v52.917h-52.917z\" style=\"display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-151.742 -87.25)\"/><path d=\"m186.553 94.908-4.382 7.62a23 23 0 0 0-2.803-.174c-12.617 0-18.852 11.59-18.852 11.59 0 .15 3.314 5.975 9.761 9.261l-5.35 9.304 4.893-.003 4.04-6.998.281.039-.227-.131 10.86-18.81 1.675.967-10.467 18.137q.52.025 1.05.025.873 0 1.708-.073l9.962-17.262 1.762 1.016-9.144 15.846a19.7 19.7 0 0 0 3.543-1.162l7.551-13.084 1.763 1.017-5.87 10.17c5.01-3.376 7.577-7.973 7.577-8.106 0 0-3.155-6.42-9.735-9.873l5.378-9.316zm-6.53 10.557q.228 0 .456.004l-.746 1.297a7.5 7.5 0 0 0-1.468-.149 7.46 7.46 0 0 0-7.46 7.46 7.46 7.46 0 0 0 1.88 4.944l-1.091 1.896c-7.687-2.214-10.711-7.025-10.711-7.137 0 0 5.745-8.314 19.14-8.314z\" style=\"display:inline;stroke-width:2.18045;stroke-linecap:round\" transform=\"translate(-151.742 -87.25)\"/>","width":"200.001","height":"200.001"};
const _title = "Accessibility, vision impaired";
const _description = "Accessibility, vision impaired";

export const Ac008AccessibilityVisionImpaired = defineComponent({
  name: 'Ac008AccessibilityVisionImpaired',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
