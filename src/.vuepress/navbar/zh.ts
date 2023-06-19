import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "项目",
    icon: "edit",
    prefix: "/zh/posts/project/",
    children: [
      {
        text: "厨时烹饪设计师",
        icon: "edit",
        prefix: "cookdesigner/",
        children: [
          { text: "开发笔记", icon: "edit", link: "devnote" },
        ],
      },
    ]
  },
  {
    text: "游戏开发",
    icon: "edit",
    prefix: "/zh/posts/game",
    children: [
      // {
      //   text: "苹果",
      //   icon: "edit",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "edit", link: "1" },
      //     { text: "苹果2", icon: "edit", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // }
    ],
  },
  {
    text: "软件开发",
    icon: "edit",
    prefix: "/zh/posts/software",
    children: [
      // {
      //   text: "苹果",
      //   icon: "edit",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "edit", link: "1" },
      //     { text: "苹果2", icon: "edit", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // }
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.vuepress/zh/",
  // },
]);
