import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/style.css';
import './assets/css/font-awesome.min.css';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false
import router from './routes'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
