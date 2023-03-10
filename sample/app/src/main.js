import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from "./store"
import router from "./router/index"

createApp(App).use(store).use(router).mount('#app')
 