<template>
    <div>
    	<mt-header :title="$store.state.address">
		  <router-link to="/" slot="left">
		    <mt-button icon="search"></mt-button>
		  </router-link>
		 
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
    	
    	<mt-swipe :auto="4000" style="height: 185px;background: #fff;">
		  <mt-swipe-item>
		  	    <span v-for="(item,index) in nav2" :key="index" class="link_to_food">
			  	<router-link to="/" >
	    			<figure>
	    				<img :src="item.img">
	    				<figcaption>{{item.title}}</figcaption>
	    			</figure>
	    		</router-link>
	    		</span>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	  <span v-for="(item,index) in navList" :key="index" class="link_to_food">
		  	  	
			  	<router-link to="/" >
	    			<figure>
	    				<img :src="item.img">
	    				<figcaption>{{item.title}}</figcaption>
	    			</figure>
	    		</router-link>
	    		</span>
		  </mt-swipe-item>
		</mt-swipe>

    	<div class="shop_list_container">
	    	<header class="shop_header">
	    		<svg class="shop_icon">
	    			<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
	    		</svg>
	    		<span class="shop_header_title">附近商家</span>
	    	</header>
	    	<shopList><img src=/></shopList>
    	</div>
    	<!--<foot-guide>
    		
    	</foot-guide>-->
    	<my-footer :active=$route.path></my-footer>
    </div>    
  
</template>

<script>

//import footGuide from 'src/components/footer/footGuide'
import shopList from '@/components/common/shopList'

export default {
	data(){
		return {
			allLoaded:false,
			bottomStatus:"",
			list:10,
			navList:[
				{title:"甜品饮品",img:"./static/171fd98b85dee3b3f4243b7459b48jpeg.png"},
				{title:"甜品饮品",img:"./static/02b72b5e63c127d5bfae57b8e4ab1jpeg.png"},
				{title:"甜品饮品",img:"./static/1e0f448be0624c62db416e864d2afjpeg.png"},
				{title:"甜品饮品",img:"./static/244241b514affc0f12f4168cf6628jpeg.png"},
				{title:"甜品饮品",img:"./static/235761e50d391445f021922b71789jpeg.png"},
				{title:"甜品饮品",img:"./static/432619fb21a40b05cd25d11eca02djpeg.png"},
				{title:"甜品饮品",img:"./static/7bddb07503aea4b711236348e2632jpeg.png"},
				{title:"甜品饮品",img:"./static/696aa5cf9820adada9b11a3d14bf5jpeg.png"}
			],
			nav2:[
				{title:"甜品饮品",img:"./static/8e031bf7b3c036b4ec19edff16e46jpeg.png"},
				{title:"甜品饮品",img:"./static/1e0f448be0624c62db416e864d2afjpeg.png"},
				{title:"甜品饮品",img:"./static/9700836a33e05c2410bda8da59117jpeg.png"},
				{title:"甜品饮品",img:"./static/235761e50d391445f021922b71789jpeg.png"},
				{title:"甜品饮品",img:"./static/d41b04d520d445dc5de42dae9a384jpeg.png"},
				{title:"甜品饮品",img:"./static/432619fb21a40b05cd25d11eca02djpeg.png"},
				{title:"甜品饮品",img:"./static/a9ef469a12e7a596b559145b87f09jpeg.png"},
				{title:"甜品饮品",img:"./static/d1890cf73ae6f2adb97caa39de7fcjpeg.png"}
			]
		}
	},
    components: {
    	shopList
//  	footGuide,
    },
    methods:{
    	loadTop(){
    		this.list = 20;
    		this.$refs.loadmore.onTopLoaded();
    	},
    	loadBottom(){
    		
    		this.$refs.loadmore.onBottomLoaded();
    	},
    	handleBottomChange(status) {
        	this.bottomStatus = status;
      }
    }
}

</script>

<style lang="scss" scoped>
    @import '../style/mixin';

	.link_to_food{
		 float: left;
			width: 25%;
			padding: 0.3rem 0rem;
			@include fj(center);
			figure{
				img{
					margin-bottom: 0.3rem;
					@include wh(1.8rem, 1.8rem);
				}
				figcaption{
					text-align: center;
					@include sc(0.55rem, #666);
				}
			}
		}
		
	.link_search{
		left: .8rem;
		@include wh(.9rem, .9rem);
		@include ct;
	}
	.msite_title{
		@include center;
        width: 50%;
        color: #fff;
        text-align: center;
        margin-left: -0.5rem;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            display: block;
        }
	}
	.msite_nav{
		padding-top: 2.1rem;
		background-color: #fff;
		border-bottom: 0.025rem solid $bc;
		height: 10.6rem;
		.swiper-container{
			@include wh(100%, auto);
			padding-bottom: 0.6rem;
			.swiper-pagination{
				bottom: 0.2rem;
			}
		}
		.fl_back{
			@include wh(100%, 100%);
		}
	}
	.food_types_container{
		display:flex;
		flex-wrap: wrap;
		
	}
	.shop_list_container{
		margin-top: .4rem;
		border-top: 0.025rem solid $bc;
		background-color: #fff;
		.shop_header{
			.shop_icon{
				fill: #999;
				margin-left: 0.6rem;
				vertical-align: middle;
				@include wh(0.6rem, 0.6rem);
			}
			.shop_header_title{
				color: #999;
				@include font(0.55rem, 1.6rem);
			}
		}
	}

</style>
