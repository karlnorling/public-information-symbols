// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M151.316 101.283h52.917V154.2h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-151.316 -101.283)\"/><path d=\"m171.56 115.636-3.638 1.443 4.265 6.962-6.837 2.635-4.893-4.329-2.948 1.318 4.329 7.276 10.287-1.38 20.265-6.755c4.189-1.107 6.259-2.837 5.849-4.044-.367-1.08-2.745-1.785-6.937-.535l-11.588 3.368zm-14.302 23.02v1.192h41.024v-1.191z\" style=\"fill:#000;stroke-width:4\" transform=\"translate(-151.316 -101.283)\"/>","width":"200.001","height":"200.001"};
const _title = "Flight departures";
const _description = "Flight departures";

export const Tf015FlightDepartures = defineComponent({
  name: 'Tf015FlightDepartures',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
