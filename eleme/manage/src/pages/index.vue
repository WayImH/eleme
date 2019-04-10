<template>
	
		<el-container>
		  <el-aside width="210px">
		  		 <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      background-color="#324057"
				      text-color="#fff"
				      active-text-color="#20a0ff"
				      router>
				      <el-menu-item index="/index">
				      	<template slot="title">
				        	<i class="el-icon-menu"></i>
				       	 	<span slot="title">首页</span>
				        </template>
				      </el-menu-item>
				      	<el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-document"></i>
					          <span>数据管理</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="userlist">用户列表</el-menu-item>
					          <el-menu-item index="shoplist">商家列表</el-menu-item>
					          <el-menu-item index="foodslist">食品列表</el-menu-item>
					          <el-menu-item index="orderlist">订单列表</el-menu-item>
					          <el-menu-item index="adminlist">管理员列表</el-menu-item>
					        </el-menu-item-group>
					    </el-submenu>
					    <el-submenu index="2">
					        <template slot="title">
					          <i class="el-icon-plus"></i>
					          <span>添加数据</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="addshop">添加商铺</el-menu-item>
					          <el-menu-item index="addfoods">添加商品</el-menu-item>					         
					        </el-menu-item-group>
					    </el-submenu>
					    <el-submenu index="3">
					        <template slot="title">
					          <i class="el-icon-star-on"></i>
					          <span>图表</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="3-1">用户分布</el-menu-item>					     
					        </el-menu-item-group>
					    </el-submenu>
					    <el-submenu index="4">
					        <template slot="title">
					          <i class="el-icon-edit"></i>
					          <span>编辑</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="4-1">文本编辑</el-menu-item>					        
					        </el-menu-item-group>
					    </el-submenu>
					    <el-submenu index="5">
					        <template slot="title">
					          <i class="el-icon-setting"></i>
					          <span>设置</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="5-1">管理员设置</el-menu-item>					        
					        </el-menu-item-group>
					    </el-submenu>
					    <el-submenu index="6">
					        <template slot="title">
					          <i class="el-icon-warning"></i>
					          <span>说明</span>
					        </template>
					        <el-menu-item-group>	         
					          <el-menu-item index="6-1">说明</el-menu-item>					        
					        </el-menu-item-group>
					    </el-submenu>
				    </el-menu>
		  </el-aside>
		  
		  
		  
		
		  <el-container>
		    <el-header>
		    	<myheader></myheader>
		    </el-header>
		     
		    <el-main>
		    	<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
	
		
			
	
	

</template>

<script>
	import myheader from"../components/header"
	export default{
		components:{myheader},
		methods:{
			logout(){
				this.$store.commit("changename","")
				this.$router.push("/");
			}
		}
	}
</script>

<style scoped>
	 .el-container{height: 100%;}
	 .el-header, .el-footer {
    background-color: #eff2f7;
    color: #333;
   
    line-height:60px;
  }
  
  .el-aside {
    background-color: #324057;
    color: #333;
   
    line-height: 200px;
  }
  
  .el-main {
    background-color: #f5f5f5;
    color: #333;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
/*  .el-menu-item{background:#ccc;color: #fff;}*/
</style>