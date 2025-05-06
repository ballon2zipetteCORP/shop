import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import mdiVue from 'mdi-vue/v3'
import * as mdiJs from '@mdi/js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mdiVue, { icons: mdiJs });


app.mount('#app')
