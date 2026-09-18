// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M165.576 103.285h52.917v52.917h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-165.576 -103.285)\"/><path d=\"M193.307 112.14c1.476 1.295 1.735 2.948 2.269 4.764h10.512c.17-1.004.647-1.861 1.096-2.76zm-18.427 3.878v12.533l5.442 3.071v-3.071h2.832v-12.533zm2.707 1.521h4.259v9.764h-1.551v-8.091zm18.178 1.165-2.032 1.818h1.59q-.037.307-.04.615a5.374 5.374 0 0 0 5.375 5.375c2.741 0 5.378-2.394 5.374-5.374v-2.433zm-.946 8.902c-1.23.026-1.907.946-2.646 2.269l-2.755 7.779-4.79-4.94c-.821-.889-1.831-.993-2.447-.481-.677.562-.896 1.822-.309 2.49l7.205 8.555c1.035 1.075 2.468.951 3.044-.384l2.358-6.968v11.422h14.71v-17.397c.01-1.109-1.338-2.325-2.496-2.308h-3.29l-1.815 5.295h-.492l-2.079-5.332z\" style=\"fill:#000;stroke-width:4.9725\" transform=\"translate(-165.576 -103.285)\"/>","width":"200.001","height":"200.001"};
const _title = "Immigration, or Passport control/inspection";
const _description = "Immigration, or Passport control/inspection";

export const Tf019ImmigrationOrPassportControlInspection = defineComponent({
  name: 'Tf019ImmigrationOrPassportControlInspection',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
