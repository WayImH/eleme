import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var store = new Vuex.Store({
	state:{
		city:"",
		address:"",
		position:'',
		imgAddress:"http://47.107.239.17:7890/",
		shopCar:null,
		userName:"",

		chooseAddress:''
	},
	mutations:{
		changeCity(state,value){
			this.city=value
		},
		changeAddress(state,value){
			this.address=value
		},
		changePosition(state,value){
			this.position=value
		},
		changeShopCar(state,value){
			state.shopCar=value
		},
		changeUser(state,value){
			state.userName = value
		},
		changeChooseAddress(state,value){
			state.chooseAddress = value
		}
	}
})
export default store