import { fileURLToPath } from "node:url";
import path from "path";
import remarkGfm from "remark-gfm";
import type { StorybookConfig } from "@storybook/react-vite";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: "@storybook/react-vite",
  staticDirs: [
    { from: "../../../packages/@public-information-symbols/assets/assets", to: "/assets" },
    { from: "../../../packages/@public-information-symbols/sprite", to: "/assets/sprites" },
  ],
  viteFinal: (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@public-information-symbols/core": path.resolve(
        dirname,
        "../../../packages/@public-information-symbols/core/src/index.ts",
      ),
      "@public-information-symbols/react": path.resolve(
        dirname,
        "../../../packages/@public-information-symbols/react/src/index.ts",
      ),
    };
    return config;
  },
};

export default config;
