import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-ui'
import vant from 'vant'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
