<template>
	<div class="shopList">
		<el-table
		    :data="tableData5"
		    style="width: 100%">
		    
		    <el-table-column type="expand">
		      <template slot-scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">
		          <el-form-item label="联系电话">
		            <span>{{ props.row.phone }}</span>
		          </el-form-item>
		          <el-form-item label="店铺标语">
		            <span>{{ props.row.slogan }}</span>
		          </el-form-item>
		          <el-form-item label="店铺分类">
		            <span>{{ props.row.category }}</span>
		          </el-form-item>
		          <el-form-item label="店铺 ID">
		            <span>{{ props.row._id }}</span>
		          </el-form-item>
		          <el-form-item label="营业时间">
		            <span>{{ props.row.startTime }}</span>
		          </el-form-item>
		          <el-form-item label="打样时间">
		            <span>{{ props.row.endTime }}</span>
		          </el-form-item>
		          <el-form-item label="起送价格">
		            <span>{{ props.row.sendPrice}}</span>
		          </el-form-item>
		        </el-form>
		      </template>
		    </el-table-column>
		    
		    <el-table-column
		      label="商店名称"
		      prop="shopName">
		    </el-table-column>
		    
		    <el-table-column
		      label="店铺地址"
		      prop="address">
		    </el-table-column>
		    
		    <el-table-column
		      label="店铺介绍"
		      prop="infor">
		    </el-table-column>
		    
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          type="danger"
		          @click="addGoods(scope.$index, scope.row)">添加商品</el-button>
		          
		      </template>
    		</el-table-column>
  		</el-table>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData5: []
      }
    },
    async created(){
    	var res = await this.$http.get("/shopList/shopList")
    	console.log(res)
    	this.tableData5 = res.data
    },
    methods:{
    	
    	addGoods(index,row){
    	console.log(index,row)
    	//index是对应的索引，row，是哪一个商店的所有信息
    	//当点击添加按钮的时候，把店铺的名字，id 带着
    	//name:"addShop"  意思是跳转到addshop页面    params：属性   里面的值是 这一次的  id 和店铺名
    	this.$router.push({name:"addGoods",params:{id:row._id,shopName:row.shopName}})
      }
    }
  }
</script>

<style>
	.demo-table-expand {
    	font-size: 0;
  	}
    .demo-table-expand label {
    	width: 90px;
   		color: #99a9bf;
  	}
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
  	}
</style>