import { h } from 'vue';
import type { ExtractPropTypes, StyleValue, VNode } from 'vue';
import { renderSvg } from '@public-information-symbols/core/render';
import type { SvgParts } from '@public-information-symbols/core/render';
import type { symbolProps } from './SymbolPropsBase';

/** Renders a symbol's SVG inside a layout-transparent `<span>`. */
export const renderSymbol = (
  parts: SvgParts,
  defaultTitle: string,
  defaultDescription: string,
  props: ExtractPropTypes<typeof symbolProps>,
  attrs: Record<string, unknown>,
  uid: string,
): VNode =>
  h('span', {
    ...attrs,
    // Array form lets Vue normalise string, array and object styles alike.
    style: [{ display: 'contents' }, attrs.style as StyleValue],
    innerHTML: renderSvg(parts, {
      ariaLabel: props.ariaLabel,
      description: props.description ?? defaultDescription,
      height: props.height,
      title: props.title ?? defaultTitle,
      uid,
      width: props.width,
    }),
  });
