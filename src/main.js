import { createApp } from 'vue'

import '@/style.css'
import '@/plugins/axios'
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue'

import router from '@/router'

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')