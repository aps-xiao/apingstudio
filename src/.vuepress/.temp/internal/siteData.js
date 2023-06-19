export const siteData = JSON.parse("{\"base\":\"/apingstudio/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"APingStudio\",\"description\":\"Let's do things together.\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"一咻工作室\",\"description\":\"让我们一起来搞事情。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
