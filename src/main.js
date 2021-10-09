import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'

import AppLayout from '@/layouts/AppLayout'
Vue.component('AppLayout', AppLayout)

createApp(App).use(router).mount('#app')
