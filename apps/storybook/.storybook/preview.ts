import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Introduction",
          "ISO 7001",
          ["React Components", "CSS Sprite", "SVG Sprite", "Assets & API"],
        ],
      },
    },
  },
};

export default preview;
