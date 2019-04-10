<template>
	<div class="myheader">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item v-for="item in $route.meta" :key="item">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		 
		<el-dropdown>
		  <span class="el-dropdown-link">
		    <img src="../../../../compents/zujian/src/assets/ic_tab_profile_normal.png"/>
		   <!-- <i class="el-icon-arrow-down el-icon--right"></i>-->
		  </span>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item><span @click="logout()">退出</span></el-dropdown-item>
		    <el-dropdown-item>{{$store.state.username}}</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
				
	</div>
</template>

<script>
	export default{
		methods:{
			logout(){
				this.$store.commit("changename","")
				this.$router.push("/");
			}
		}
	}
</script>

<style>
	.el-dropdown-link{display: block;width: 40px;height: 50px;margin-top: 10px;}
	.el-dropdown-link img{
		width: 40px;height: 40px;border-radius: 20px;
	}
	.myheader{display: flex;justify-content:space-between;align-items: center;}
</style>