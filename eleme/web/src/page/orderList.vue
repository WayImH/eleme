<template>
	<div class="orderlist">
		 <mt-header title="我的订单" fixed>
		  <a @click="$router.go(-1)" slot="left">
		    <mt-button icon="back"></mt-button>
		  </a>
		</mt-header>
		<div class="list2" v-if="flag">
			
			<h3>你还未没有登陆哦！</h3>
			<router-link to="/login">去登陆</router-link>
		</div>
		<div class="listall" v-else>
		<div class="list"  v-for="(item,index) in list" :key="index">
			
			<div class="head">
				 <img :src="item.shop.shopphoto">
                   
			</div>
            <div class="price">
            	<span>{{item.shop.shopname}}</span>
            	<span>{{item.goodsList[0].foodName}}</span>
            </div>
            <div class="more">
            	<span>总价：{{item.orderPrice}}</span>
               	 <button>再来一单</button>
            </div>
               
            
         </div>       
           
		</div>
		
		
		
		
		
		<my-footer :active=$route.path></my-footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
//				shop:this.$store.state.shopCar.shop,
				flag:true,
				userName:this.$store.state.userName
			}
		},
		computed:{
				shop(){
					return this.$store.state.shopCar.shop
				}
			},
		 async created(){
		 	if(!this.userName==""){
		 		this.flag=false
		 		var res = await this.$http.get("/order",{params:{
				userName:this.$store.state.userName
			}})
			console.log(res)
			this.list=res.data
			
		 	}else{
		 		this.flag=true
		 	}
			
		}
	}
</script>

<style >
	
	.listall{padding:1.7rem 0;}
	.list{display:flex;margin-top: .6rem; background: #fff;padding: 0.5rem 0;border-bottom: 1px solid #EBEBEB;}
	.list img{width: 2rem;height: 2rem;margin-right: 0.5rem;}
	.head{display: flex; margin:0 0.5rem; padding: 0.3rem 0;justify-content:space-between;}
	.head span{font-size: 0.8rem; padding-left: -0.5rem;}
	
	.price{flex:1;display: flex;flex-direction: column;}
	.price span{font-size: 0.8rem;}
	.list2{ width:100%; height: 100%;margin: 3rem auto;text-align: center;}
	.more{display: flex;flex-direction: column;}
	.more span{font-size: 0.6rem;margin-right: 0.8rem;margin-bottom: 0.3rem;}
	.more button{border-radius: 0.05rem;border: 1px solid dodgerblue;height: 1rem;background: none;font-size: 0.6rem;margin-right: 0.8rem;}

</style>