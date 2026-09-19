import type { PropType } from 'vue';

export const symbolProps = {
  /** Accessible name for the `<svg>`; pass as `aria-label` in templates. */
  ariaLabel: { type: String as PropType<string> },
  description: { type: String as PropType<string> },
  height: { type: [Number, String] as PropType<number | string> },
  title: { type: String as PropType<string> },
  width: { type: [Number, String] as PropType<number | string> },
} as const;
