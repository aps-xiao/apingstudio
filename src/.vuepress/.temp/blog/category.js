export const categoryMap = {"category":{"/":{"path":"/category/","map":{"教程":{"path":"/category/%E6%95%99%E7%A8%8B/","keys":["v-153655f0"]},"program":{"path":"/category/program/","keys":["v-c38fab7a"]}}},"/zh/":{"path":"/zh/category/","map":{"教程":{"path":"/zh/category/%E6%95%99%E7%A8%8B/","keys":["v-7eb5ede1"]},"我的项目":{"path":"/zh/category/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/","keys":["v-0a9d4134"]}}}},"tag":{"/":{"path":"/tag/","map":{"红":{"path":"/tag/%E7%BA%A2/","keys":["v-153655f0"]},"red":{"path":"/tag/red/","keys":["v-c38fab7a"]}}},"/zh/":{"path":"/zh/tag/","map":{"红":{"path":"/zh/tag/%E7%BA%A2/","keys":["v-7eb5ede1","v-0a9d4134"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


