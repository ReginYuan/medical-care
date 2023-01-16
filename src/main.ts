import { createSSRApp } from "vue";
import App from "./App.vue";
// main.js，注意要在use方法之后执行
import uviewPlus from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  // 如此配置即可
  uni.$u.config.unit = 'rpx'
  return {
    app,
  };
}
