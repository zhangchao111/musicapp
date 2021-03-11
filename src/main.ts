import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less'
import '@/assets/font/iconfont.css'
import './style/base/antd.less'
import { registeGlobalComponent } from '@/components/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import { loadAllPlugins } from '@/plugins/index'
const app: ReturnType<typeof createApp> = createApp(App)
/** 加载所有 Plugins */
loadAllPlugins(app)
/** 自动注册全局组件  */
registeGlobalComponent(app)
app.
    use(store)
    .use(router)
    .use(Vant)
    .mount('#app')
