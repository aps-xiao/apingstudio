export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Blog Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"Blog Home\",\"heroImage\":\"/avatar.png\",\"bgImage\":\"/background2.png\",\"heroText\":\"Mr.Xiao\",\"tagline\":\"I want things to be the way they should be.\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"/assets/cookdesigner/logo.png\",\"name\":\"Cook Designer\",\"desc\":\"Make cooking more efficient.\",\"link\":\"https://gitee.com/aps-xiao/cookdesigner\"}],\"footer\":\"I want things to be the way they should be.\",\"copyright\":true,\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.43,\"words\":128},\"filePathRelative\":\"README.md\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
