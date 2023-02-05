import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "note",
      text: "project",
      prefix: "posts/project/",
      link: "posts/project/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
