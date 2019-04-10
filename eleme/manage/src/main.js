// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from "./HTTP"
import store from "./store"
Vue.prototype.$http=axios

Vue.config.productionTip = false
Vue.use(ElementUi)
router.beforeEach((to,from,next)=>{
	if(to.path=="index"){
		if(store.state.username){
			next()
		}else{
			router.push("/")
		}
	}else{
		next()
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
