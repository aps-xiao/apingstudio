export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-153655f0","v-c38fab7a","v-184f4da6"]},"/zh/":{"path":"/zh/article/","keys":["v-7eb5ede1","v-0a9d4134","v-858cfdd6"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-153655f0","v-c38fab7a"]},"/zh/":{"path":"/zh/timeline/","keys":["v-7eb5ede1","v-0a9d4134"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

