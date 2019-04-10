<template>
	<div>
		<el-table
		    :data="tableData5"
		    style="width: 100%">
		    <el-table-column type="expand">
		      <template slot-scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">		       
		          <el-form-item label="所属店铺">
		            <span>{{ props.row.shopname }}</span>
		          </el-form-item>
		          <el-form-item label="商品类别">
		            <span>{{ props.row.category }}</span>
		          </el-form-item>	          		         		         
		          <el-form-item label="商品分类">
		            <span>{{ props.row.category }}</span>
		          </el-form-item>
		          
		          <el-form-item label="优惠信息">
		            <span>{{ props.row.sale }}</span>
		          </el-form-item>
		          
		          <el-form-item label="规格">
		            <span>{{ props.row.size }}</span>
		          </el-form-item>
		        </el-form>
		        
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="店铺 ID"
		      prop="_id">
		    </el-table-column>
		    <el-table-column
		      label="店铺名称"
		      prop="shopname">
		    </el-table-column>
		    <el-table-column
		      label="商品名"
		      prop="foodName">
		    </el-table-column>
		    <el-table-column
		      label="操作">
		      <template slot-scope="scope">
		      	<el-button
		          size="mini"
		         
		          @click="editgoods(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="removegoods(scope.$index, scope.row)">删除</el-button>
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
		    	var res = await this.$http.get("/foodslist")
		    	console.log(res)
		    	this.tableData5=res.data
		   },
		   methods:{
		   	removegoods(index,row){
		   		
		   		 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			        this.tableData5.splice(index,1)
		   			this.$http.delete("/foodslist?foodid="+row._id)
			          this.$message({
			            type: 'success',
			            message: '删除成功!'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });
		   	},
		   	editgoods(index,row){
		   		this.$router.push({name:"editfoods",params:{row}})
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