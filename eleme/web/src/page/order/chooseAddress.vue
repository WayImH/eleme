<template>
	<div class="choose">
		   <mt-header title="选择地址" fixed>
			  <router-link to="/order" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			</mt-header>
		  <div class="list_box">
			   	<div class="list" v-for="(item,index) in list" :key="index" @click="choose(item)">
		            <header>
		                <span>{{item.yourName}}</span>
		                <span>{{item.sex}}</span>
		                <span>{{item.phone}}</span>
		            </header>
		            <div class="address_detail">
		                <span>{{item.tag}}</span>
		                <p>{{item.address}}</p>
		            </div>
	          </div>
		   </div>
		   
			<div class="add" @click="addAddress()">
				<img src="../../../static/icon.png"/>
				<span>新增收货地址</span>
			</div>
			 
	</div>
</template>

<script>
export default {
	data(){
		return{
			uaerName:this.$store.state.userName,
			list:[
				
			]
		}
	},
	async created(){
		var res =await this.$http.get("/address",{
			params:{userName:this.$store.state.userName}
		})
		console.log(res)
		this.list=res.data
	},
	methods:{
		addAddress(){
			this.$router.push("/order/addAddress")
		},
		choose(item){
			this.$store.commit("changeChooseAddress",item)
			this.$router.push("/order")
		}
	}
}
</script>
<style>
.choose { width: 100%; height: 100%; position: fixed; top: 0; left: 0;
background: #fff; z-index: 10000;}

.choose .add {
	display: flex;justify-content: center;align-items: center;
	position: fixed; bottom: 1rem; left: 0; right: 0; margin: 0 auto; width: 60%;
}
.choose .add img{width: 0.8rem;height: 0.8rem;margin-right: 0.2rem;}
.choose .add span{font-size: 0.8rem; }


.choose .list_box { margin-top: 2rem; padding: 0 22px; font-size: 0.7rem;}
.choose .list { padding: 15px 0; border-bottom: 1px solid #eee;}
.choose .address_detail { display: flex;}
.choose .address_detail span {height: 0.8rem;width: 1.4rem; background: darkorange;
 color: #fff;border-radius: 3px;font-size: 0.5rem;padding: 0.5 0.3rem;line-height: 0.8rem;text-align: center;}
.choose .address_detail p{font-size: 0.6rem;padding-left: 1rem;}
.choose { width: 100%; height: 100%; position: fixed; top: 0; left: 0;
background: #fff; z-index: 10000;}


</style>