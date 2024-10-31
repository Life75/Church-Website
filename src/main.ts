import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/main' 

import './style.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//import Vuetify from 'vuetify'



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
//  app.use(Vuetify)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
