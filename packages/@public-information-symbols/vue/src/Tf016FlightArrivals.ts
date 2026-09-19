// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M188.574 109.445h52.917v52.917h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-188.574 -109.445)\"/><path d=\"m218.885 125.937-5.641 8.463-12.314.96c-4.466.318-6.486 1.82-6.445 2.96.04 1.11 2.029 1.924 5.46 1.816a.92.92 0 0 0-.381.745.92.92 0 0 0 .92.92.92.92 0 0 0 .92-.92.92.92 0 0 0-.465-.8q.3-.022.612-.054l12.804-.51a.92.92 0 0 0-.608.866.92.92 0 0 0 .92.92.92.92 0 0 0 .92-.92.92.92 0 0 0-.676-.888l1.964-.078a.92.92 0 0 0-.578.855.92.92 0 0 0 .92.92.92.92 0 0 0 .92-.92.92.92 0 0 0-.646-.88l5.908-.234 10.347-2.357 1.502-8.339-3.3-.186-3.112 5.782-7.5-.04 1.555-8.022zm-24.352 18.534v1.399h41.047v-1.4z\" style=\"fill:#000;stroke-width:4.04698\" transform=\"translate(-188.574 -109.445)\"/>","width":"200.001","height":"200.001"};
const _title = "Flight arrivals";
const _description = "Flight arrivals";

export const Tf016FlightArrivals = defineComponent({
  name: 'Tf016FlightArrivals',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
