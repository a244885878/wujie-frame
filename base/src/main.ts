import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import './main.scss'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import WujieVue from "wujie-vue3";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'

const app = createApp(App);

// 注册所有element-plus/icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, { locale: zhCn })
app.use(router);
app.use(WujieVue)
app.mount('#app');