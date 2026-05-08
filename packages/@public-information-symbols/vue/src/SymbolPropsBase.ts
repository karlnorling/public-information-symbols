import type { PropType } from "vue";

export const symbolProps = {
  "aria-label": { type: String as PropType<string> },
  description: { type: String as PropType<string> },
  height: { type: [Number, String] as PropType<number | string> },
  title: { type: String as PropType<string> },
  width: { type: [Number, String] as PropType<number | string> },
} as const;
