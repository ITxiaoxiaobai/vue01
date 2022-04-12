import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vant from 'vant'
import 'vant/lib/index.css'
import './assets/iconSheet/iconfont.css'
import dialog from './components/common/dialog/index'

Vue.config.productionTip = false
Vue.config.performance = true
Vue.config.silent = true
console.log(Vue.version)
Vue.use(element)
Vue.use(vant);
Vue.use(dialog);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
