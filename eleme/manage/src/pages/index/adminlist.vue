<template>
	<div>
		 <el-table
		    ref="singleTable"
		    :data="tableData"
		    highlight-current-row
		    @current-change="handleCurrentChange"
		    style="width: 100%">
		    
		    <el-table-column
		      type="index"
		      width="50">
		    </el-table-column>
		    
		    <el-table-column
		      property="username"
		      label="姓名"
		      width="120">
		    </el-table-column>
		    
		    <el-table-column
		      property="creattime"
		      label="日期"
		      width="200">
		    </el-table-column>
		    
		    <el-table-column
		      property="city"
		      label="地址">
		    </el-table-column>
		    
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
    
		  </el-table>
		   
		    
		       
		  <el-pagination
		  
		  	@current-change="pagechange"
			  background
			  layout="prev, pager, next,jumper,total"
			  :total="total"
			  :page-size="5"
			  >
			</el-pagination>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        tableData: [],
        currentRow: null,
        pageNumber:1,
        total:0
      }
    },
	async created(){
		 this.requestdata()
		 var total = await this.$http.get("/adminlist/count")
      	console.log(total)
      	this.total = total.data
	},
    methods: {
    	
    	pagechange(pageNumber){
    		this.pageNumber=pageNumber
    		this.requestdata()
    	},
      async requestdata(){
      	var res = await this.$http.get("/adminlist?pageNumber="+this.pageNumber)
      	console.log(res)
      	this.tableData = res.data
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style>
</style>