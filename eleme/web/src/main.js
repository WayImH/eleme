// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
axios.defaults.baseURL="http://47.107.239.17:7890"
Vue.prototype.$http=axios
Vue.use(MintUI)
Vue.config.productionTip = false
import myFooter from './components/footer'
Vue.component('my-footer',myFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
