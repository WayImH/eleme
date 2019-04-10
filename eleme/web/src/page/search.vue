<template>
	<div>
		<mt-header title="搜索" fixed>
		  <a @click="$router.go(-1)" slot="left">
		    <mt-button icon="back"></mt-button>
		  </a>
		</mt-header>
		<div class="search">
			<input type="search" placeholder="请输入商家或美食名称" v-model="msg"  v-on:input ="inputFunc"/>
			<button class="btn" @click="sub()">提交</button>
		</div>
		
		<div class="shopList" v-if="flag">
			<h2>商家</h2>
			<div class="shopList_content" v-for="(item,index) in list" :key="index" @click="goShoper(item)">
				<div class="left">
					<img :src="item.shopphoto"/>
				</div>
				<div class="right">
					<p>{{item.shopname}}</p>
					<p>{{item.address}}</p>
					<p>{{item.phone}}</p>
				</div>
			</div>
		</div>
		<div class="noSearch" v-if="show">
			很抱歉！无搜索结果！
		</div>
		<my-footer :active="$route.path"></my-footer>
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				msg:"",
				list:[],
				flag:false,
				show:false
			}
		},
		methods:{
			async sub(){
				//写个正则不能以点开头，并且输入框中要出现一次文字或多次文字
				if(/^[^.]+/.test(this.msg)){
					var res = await this.$http.get("/shopList/aa?str="+this.msg)
					console.log(res)
					this.list = res.data
					this.flag = true
					this.show = false
				}else{
					Toast({
					  message: '请输入正确的文字信息',
					  position: 'middle',
					  duration: 3000
					});
					this.show = true
					this.flag = false
				}
				if(!this.list.length){
					this.flag = false
					this.show = true
				}
			},
			inputFunc(){
				this.flag = false
				this.show = false
			},
			async goShoper(item){
				this.$router.push({name:'shop',params:{shop:item}})
			}
		}
	}
</script>

<style>
	.mint-header{
		font-size: 0.7rem;
		height: 1.6rem;
	}
	.search {
		position: absolute;
		width: 100%;
		top: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		height: 2.8rem;
		margin: auto 0;
	}
	.search input {
		
		width: 70%;
		height: 1.6rem;
		background: #f2f2f2;
		color: #333;
		font-size: 0.64rem;
		padding-left: 0.6rem;
		font-weight: bold;
		border: 0.01rem solid #CCCCCC;
		margin-top: 0.4rem;
	}
	.btn {
		
		width: 20%;
		height: 1.6rem;
		background:#26a2ff;
		color: #FFFFFF;
		font-size: 0.64rem;
		border-radius: 0.1rem;
		margin-left: 0.4rem;
		font-weight: bold;
		margin-top: 0.4rem;
	}
	.shopList {
		position: absolute;
		top: 4.4rem;
		width: 100%;
		height: 6rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.shopList h2 {
		width: 100%;
		background:#f2f2f2;
		font-size: 0.64rem;
		color: #666;
		padding: 0.4rem 0.8rem;
		font-weight: bold;
	}
	.shopList_content {
		width: 100%;
		height: 4.2rem;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border-bottom: 0.1rem solid #e4e4e4;
	}
	.shopList_content >div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.left {
		width: 3.6rem;
		height: 3.6rem;
		padding-left: 0.8rem;
	}
	.left img {
		width: 100%;
		height: auto;
	}
	.right p {
		width: 100%;
		font-size: 0.46rem;
		padding-left: 0.8rem;
		line-height: 1rem;
	}
	.noSearch {
		position: absolute;
		top: 4.5rem;
		width: 100%;
		background: #FFFFFF;
		height: 2.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.86rem;
	}
</style>