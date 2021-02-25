import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less'
import { registeGlobalComponent } from '@/components/index'

const app: ReturnType<typeof createApp> = createApp(App)
registeGlobalComponent(app)
app.
    use(store)
    .use(router)
    .mount('#app')
