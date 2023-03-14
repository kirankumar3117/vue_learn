import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import buttonPlugin from './plugins/buttonPlugin'
const app = createApp(App)

app.use(router)

app.use(buttonPlugin)

// Adding Options

// app.use(buttonPlugin,{
//     fontSize:{
//         small:12,
//         medium:16,
//         Large:36
//     }
// })



app.mount('#app')
