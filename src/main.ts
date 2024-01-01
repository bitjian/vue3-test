import './assets/main.css'
import '@/utils/winUtils'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { errorLog } from '@/utils/index'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// errorLog('111')
app.mount('#app')
