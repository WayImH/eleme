import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
var store = new Vuex.Store({
	state:{
		username:""
	},
	mutations:{
		changename(state,value){
			state.username=value
		}
	}
})
export default store