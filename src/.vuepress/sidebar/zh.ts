import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "note",
      text: "项目",
      prefix: "posts/project/",
      link: "posts/project/",
      children: "structure",
    },
    {
      text: "游戏开发笔记",
      icon: "note",
      prefix: "posts/game",
      children: "structure",
    },
     {
      text: "软件开发笔记",
      icon: "note",
      prefix: "posts/game",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
