<template>
	<div class="addshop">
		<!--店铺名-->
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="店铺名称" prop="shopname">
			  <el-input v-model="ruleForm.shopname"></el-input>
			</el-form-item>
		</el-form>
		<!--详细地址-->
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="详细地址" prop="address">
			  <el-input v-model="ruleForm.address"></el-input>当前城市：
			</el-form-item>
		</el-form>
		<!--电话-->
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="联系电话" prop="phone">
			  <el-input  v-model.number="ruleForm.phone"></el-input>
			</el-form-item>
		</el-form>
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="店铺简介">
			  <el-input v-model="ruleForm.introduction"></el-input>
			</el-form-item>
		</el-form>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="店铺标语">
			  <el-input v-model="ruleForm.slogan"></el-input>
			</el-form-item>
		
		</el-form>
			
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="店铺分类">
			  <el-select v-model="ruleForm.category" placeholder="请选择">
				    <el-option label="汉堡/披萨" value="汉堡/披萨"></el-option>
				    <el-option label="特色小吃" value="特色小吃"></el-option>
				    <el-option label="烧烤/生煎" value="烧烤/生煎"></el-option>
				    <el-option label="养生粥" value="养生粥"></el-option>
				    <el-option label="面食" value="面食"></el-option>
			  </el-select>
			</el-form-item>
		</el-form>
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="店铺特点">
   					品牌保证 <el-switch v-model="ruleForm.value.assure"></el-switch>
					蜂鸟专送 <el-switch v-model="ruleForm.value.bird"></el-switch>
					新开店铺 <el-switch v-model="ruleForm.value.newshop"></el-switch>
					外卖保 <el-switch v-model="ruleForm.value.takeout" ></el-switch>	<br />
					准时达 <el-switch v-model="ruleForm.value.ontime" ></el-switch>
					开发票 <el-switch v-model="ruleForm.value.invoice" ></el-switch>
			</el-form-item>
		</el-form>
		<el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="配送费">
				 <el-input-number v-model="ruleForm.num1"  :min="0" :max="20" label="描述文字"></el-input-number>
			</el-form-item>
		</el-form>
		<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="起送价">
				<el-input-number v-model="ruleForm.num2"  :min="8"  label="描述文字"></el-input-number>
			</el-form-item>		
			</el-form>
		
		
		<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="配送时间">
				<el-time-select
		    placeholder="起始时间"
		    v-model="ruleForm.startTime"
		    :picker-options="{
		     start: '00:00',
		      step: '00:30',
		      end: '24:00',
		    }">
		  </el-time-select>
		  <el-time-select
		    placeholder="结束时间"
		    v-model="ruleForm.endTime"
		    :picker-options="{
		      start: '00:00',
		      step: '00:30',
		      end: '24:00',
		    }">
		 </el-time-select>
			</el-form-item>		
		</el-form>
		
		<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="上传店铺头像">
				<el-upload
				  class="avatar-uploader"
				  action="http://47.107.239.17:7890/addshop/photo"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>		
		</el-form>
		
		
		
		<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="优惠活动">
				  <el-select v-model="ruleForm.action" placeholder="请选择"  @change="open3">
				   <el-option label=" 满减优惠" value=" 满减优惠"></el-option>
				   <el-option label=" 优惠大酬宾" value=" 优惠大酬宾"></el-option>
				   <el-option label=" 新用户立减" value=" 新用户立减"></el-option>
				   <el-option label="进店领券" value="进店领券"></el-option>
				  </el-select>
			</el-form-item>				
		</el-form>
		<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  <el-table :data="ruleForm.saleList" style="width: 100%"  >
			  	<el-table-column label="活动标题" width="160" prop="title"> </el-table-column> 
			    <el-table-column label="活动详情" width="160" prop="info"> </el-table-column>   
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			      	<el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</el-form>
		  <el-button type="primary" @click="onsubmit()">立即创建</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			
			return{
				imageUrl:"",
				ruleForm:{
					value:{
						assure:true,
						bird:true,
						newshop:true,
						takeout:true,
						ontime:true,
						invoice:true
						
					},
					shopname:"",
					address:"",
					phone:"",
					introduction:"",
					slogan:"",
					category:"",
					num1:0,
					num2:8,
					startTime: '',
        			endTime: '',
        			imageUrl:"",
        			action:"",
        			saleList:[]   ,
        			shopphoto:""
				},
				rules:{
					shopname:[
						{required:true,message:"请输入店铺名"},
						{min:3,max:16,message:'只允许输入3-16个字符'}
					],
					address:[
						{required:true,message:"请输入详细地址"},
						{min:3,max:16,message:'只允许输入3-16个字符'}
					],
					phone:[
				   {required:true,message:"请输入联系电话"},
				   {type:'number',message:"必须是数字"}
				]
				}
				
			}
		},
			 methods: {
			      handleAvatarSuccess(res, file) {
			      	console.log(res)
			      	this.ruleForm.shopphoto="http://47.107.239.17:7890/"+res
			        this.imageUrl = URL.createObjectURL(file.raw);
			      },
			      beforeAvatarUpload(file) {
			        const isJPG = file.type === 'image/jpeg';
			        const isLt2M = file.size / 1024 / 1024 < 2;
			
			        if (!isJPG) {
			          this.$message.error('上传头像图片只能是 JPG 格式!');
			        }
			        if (!isLt2M) {
			          this.$message.error('上传头像图片大小不能超过 2MB!');
			        }
			        return isJPG && isLt2M;
			      },
			       open3(title){
			      	  this.$prompt('请输入活动内容', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          inputPattern: /.{4,10}/,
				          inputErrorMessage: '请输入4到10个字符'
				        }).then(({ value }) => {
				          console.log(title)
				          console.log(value)
				          var youhui = {title:title,info:value}
            			  this.ruleForm.saleList.push(youhui)
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '取消输入'
				          });   
				           });
			      },
			      handleDelete(index, row) {
				        console.log(index, row);
				         this.ruleForm.saleList.splice(index,1)
				     },
				   onsubmit(){
				   	this.$refs.ruleForm.validate(async (valid)=>{
				   		if(valid){
				   			var res = await this.$http.post("/addshop/data",this.ruleForm)
				   			console.log(res)
				   			this.$router.push("/shoplist")
				   		}else{
				   			 this.$message({
				            type: 'info',
				            message: '输入内容有误'
				          });   
				   		}
				   	})
				   }
			    }
			     
	}
			
</script>

<style>
	.addshop{
		width: 580px;margin: 0 auto;
	}
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>