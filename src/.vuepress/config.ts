import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "APingStudio",
      description: "Let's do things together.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "一咻工作室",
      description: "让我们一起来搞事情。",
    },
  },

  theme,

  shouldPrefetch: false,
});
