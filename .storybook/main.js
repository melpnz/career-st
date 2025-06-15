/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag",
  },
  "staticDirs": ["../public"],
  "viteFinal": async (config) => {
    return {
      ...config,
      base: process.env.NODE_ENV === 'production' ? '/career-st/' : '/',
    };
  },
};
export default config;