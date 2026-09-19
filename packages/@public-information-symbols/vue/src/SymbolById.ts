import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { getSymbol } from '@public-information-symbols/core';
import { getSvgParts, nextUid } from '@public-information-symbols/core/render';
import { symbolProps } from './SymbolPropsBase';
import { renderSymbol } from './renderSymbol';

export const SymbolById = defineComponent({
  name: 'SymbolById',
  inheritAttrs: false,
  props: {
    ...symbolProps,
    id: { type: String as PropType<string>, required: true },
  },
  setup(props, { attrs }) {
    const uid = nextUid();
    return () => {
      const symbol = getSymbol(props.id);
      if (!symbol) return null;
      return renderSymbol(getSvgParts(symbol), symbol.name, symbol.description, props, attrs, uid);
    };
  },
});
