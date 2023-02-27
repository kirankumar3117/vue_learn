import { createApp } from 'vue'
import App from './App.vue'


//boot strap files
import "bootstrap/dist/css/bootstrap.css";

//router importing for app use
import router from "@/router/index.js"

createApp(App).use(router).mount('#app')
