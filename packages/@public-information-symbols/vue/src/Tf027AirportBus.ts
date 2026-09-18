// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import { nextUid } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M133.915 118.772h52.917v52.917h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-133.915 -118.772)\"/><path d=\"M170.891 127.341c-.12 0-.24.056-.363.185v.01c-.314.344-.525 1.068-.536 1.56l-.143 4.09-5.205 3.647.017.47c.013.354.092.463.521.39l4.78-1.354.115 2.584-2.164 1.481v.918l2.978-.797 2.978.797v-.918l-2.163-1.481.113-2.584 4.781 1.354c.43.073.508-.036.52-.39l.018-.47-5.204-3.647-.144-4.09c-.011-.492-.222-1.216-.535-1.56v-.01c-.123-.128-.243-.185-.364-.185M144.91 146.73a1.48 1.48 0 0 0-1.484 1.484v10.476a1.48 1.48 0 0 0 1.484 1.484h1.177a4.24 4.24 0 0 1 4.232-4.082 4.24 4.24 0 0 1 4.233 4.082h11.383a4.24 4.24 0 0 1 4.232-4.082 4.24 4.24 0 0 1 4.233 4.082h1.436a1.48 1.48 0 0 0 1.484-1.484v-10.476a1.48 1.48 0 0 0-1.484-1.484zm.177 1.897h6.104c.196 0 .354.158.354.354v4.309a.353.353 0 0 1-.354.353h-6.104a.353.353 0 0 1-.354-.353v-4.31c0-.195.158-.353.354-.353m8.071 0h6.105c.196 0 .354.158.354.354v4.309a.353.353 0 0 1-.354.353h-6.105a.353.353 0 0 1-.354-.353v-4.31c0-.195.158-.353.354-.353m8.071 0h6.105c.196 0 .354.158.354.354v4.309a.353.353 0 0 1-.354.353h-6.105a.353.353 0 0 1-.354-.353v-4.31c0-.195.158-.353.354-.353m8.072 0h6.104c.196 0 .354.158.354.354v4.309a.353.353 0 0 1-.354.353h-6.104a.353.353 0 0 1-.354-.353v-4.31c0-.195.158-.353.354-.353m-18.982 8.92a2.787 2.787 0 0 0-2.786 2.787 2.787 2.787 0 0 0 2.786 2.787 2.787 2.787 0 0 0 2.787-2.787 2.787 2.787 0 0 0-2.787-2.786m19.848 0a2.787 2.787 0 0 0-2.787 2.787 2.787 2.787 0 0 0 2.787 2.787 2.787 2.787 0 0 0 2.787-2.787 2.787 2.787 0 0 0-2.787-2.786\" style=\"fill:#000;stroke-width:.26592\" transform=\"translate(-133.915 -118.772)\"/>","width":"200.001","height":"200.001"};
const _title = "Airport bus";
const _description = "Airport bus";

export const Tf027AirportBus = defineComponent({
  name: 'Tf027AirportBus',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);
  },
});
