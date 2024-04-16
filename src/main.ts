import './assets/main.css'

import App from './App.vue'

import { createApp } from 'vue'
// 加入 Pinia
import { createPinia } from 'pinia'
// 加入 router
import router from './router'
// 加入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

// 加入 Pinia
app.use(createPinia())
// 加入 router
app.use(router)
// 加入 axios
app.use(VueAxios, axios)

app.mount('#App')
