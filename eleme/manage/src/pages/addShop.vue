<template>
	<!-- model用来收集表单中的数据, rules所有规则 ，ref组件标记，有了这个标记
			我们就可以 在任意地方，获取到这个组件中的属性和方法
			label-width 描述文字占的宽
			el-form-item 表单中的每一项，主要用它来 完成表单项左边的文字
			el-form-item 上面的 prop 是用来接收 验证规则
			el-input 就是一个表单项组件 v-model 用来收集这一项的数据
		-->
	<div class="addShop">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="商铺名称" prop="shopName">
    			<el-input v-model="ruleForm.shopName"></el-input>
  			</el-form-item>
  			
  			<el-form-item label="详细地址" prop="address">
    			<el-input v-model="ruleForm.address"></el-input>
  			</el-form-item>
  			
  			<el-form-item label="联系电话" prop="phone">
    			<el-input v-model.number="ruleForm.phone"></el-input>
  			</el-form-item>
  			
  			<el-form-item label="店铺简介">
    			<el-input v-model="ruleForm.infor"></el-input>
  			</el-form-item>
  			
  			<el-form-item label="店铺标语">
    			<el-input v-model="ruleForm.slogan"></el-input>
  			</el-form-item>
  			
  			<el-form-item label="店铺分类">
    			 <el-select v-model="ruleForm.category" placeholder="请选择">
    				<el-option label="汉堡披萨" value="hanbao"></el-option>
				    <el-option label="生鲜果蔬" value="shengxian"></el-option>
				    <el-option label="饺子混沌" value="jiaozi"></el-option>
				    <el-option label="家常菜" value="jiachang"></el-option>
				    <el-option label="小吃馆" value="xiaochi"></el-option>
				    <el-option label="快餐" value="kuaican"></el-option>
				    <el-option label="火锅串串" value="huoguo"></el-option>
				    <el-option label="海鲜" value="haixian"></el-option>
  				 </el-select>
  			</el-form-item>
  			
  			<el-form-item label="店铺特点">
    			品牌保证  <el-switch v-model="ruleForm.feature.brandGuarantee"></el-switch>
    			蜂鸟专送  <el-switch v-model="ruleForm.feature.bird"></el-switch>
    			新开店铺  <el-switch v-model="ruleForm.feature.newShop"></el-switch>
    			<br />
    			外卖保  <el-switch v-model="ruleForm.feature.deliveryInsurance"></el-switch>
    			准时达  <el-switch v-model="ruleForm.feature.onTime"></el-switch>
    			开发票  <el-switch v-model="ruleForm.feature.invoice"></el-switch>
  			</el-form-item>
  			
  			<el-form-item label="配送费">
    			<el-input-number v-model="ruleForm.sendPrice" :min="0" :max="20"></el-input-number>
  			</el-form-item>
  			
  			<el-form-item label="起送价">
    			<el-input-number v-model="ruleForm.startPrice" :min="8"></el-input-number>
  			</el-form-item>
  			
  			<el-form-item label="营业时间">
    			<el-time-select
				    placeholder="起始时间"
				    v-model="ruleForm.startTime"
				    :picker-options="{
				      start: '00:00',
				      step: '00:30',
				      end: '24:30'
				    }">
				  </el-time-select>
				  <el-time-select
				    placeholder="结束时间"
				    v-model="ruleForm.endTime"
				    :picker-options="{
				      start: '00:00',
				      step: '00:30',
				      end: '24:30',
				      minTime: ruleForm.startTime
				    }">
  				</el-time-select>
  			</el-form-item>
  			
  			<el-form-item label="上传店铺头像">
    			<el-upload
				  class="avatar-uploader"
				  action="http://47.107.239.17:3000/addShop/photo"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
  			</el-form-item>
		
  			<el-form-item label="优惠活动">                            <!--change当文字状态改变时-->
    			<el-select v-model="ruleForm.sale" placeholder="请选择" @change="saleAction">
				    <el-option label="满减优惠" value="满减优惠"></el-option>
				    <el-option label="优惠大酬宾" value="优惠大酬宾"></el-option>
				    <el-option label="新用户立减" value="新用户立减"></el-option>
				    <el-option label="进店领券" value="进店领券"></el-option>
				</el-select>
  			</el-form-item>
  			
  			<el-table
			    :data="ruleForm.saleList"
			    style="width: 100%">
			    
			    <el-table-column
			      label="活动标题"
			      width="120"
			      prop="title">
			    </el-table-column>
			    
			    <el-table-column
			      label="活动名称"
			      width="180"
			      prop="info">
			    </el-table-column>
			    
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			  
			  <br />
			  <el-button type="primary" @click="onSubmit">立即创建</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imageUrl: '',
				ruleForm:{
					//表单中有每需要收集的数据，都写在这
					shopName:"",
					address:"",
					phone:"",
					infor:"",
					slogan:"",
					category:"",
					feature:{
						brandGuarantee:true,
						bird:true,
						newShop:true,
						deliveryInsurance:true,
						onTime:true,
						invoice:true
					},
					sendPrice:5,
					startPrice:8,
					startTime:"",
					endTime:"",
					sale:"满减优惠",
					saleList:[{title:"满减优惠",info:"满30减5，满60减8"}],
					shopPhoto:""
				},
				rules:{
					//表单中如果有 项目需要带验证规则的，规则写在这
					shopName:[
						{ required: true, message: '请输入商铺名称', trigger: 'blur' },
            			{ min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
					],
					address:[
						{ required: true, message: '请输入地址', trigger: 'blur' },
            			{ min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
					],
					phone:[
						{ required: true, message: '请输入联系电话', trigger: 'blur' },
            			{ type:"number", message: '不符合规则' }
					]
				}
			}
		},
		methods:{
			//在上传图片时，会产生一张临时图片，file就是临时图片的文件信息
      	//上传的也是这个临时图片，
      	//file.raw图片的源信息，
      	//URL.createObjectURL() 通过一个图片的源信息，返回 图片地临时地址
			handleAvatarSuccess(res, file) {
				console.log(res)//文件的名字（如c9fc3ce403bf92a9306ec66f005821fb）
				//把数据存在data中（最后存在数据库中），把值赋值给shopPhoto
			this.ruleForm.shopPhoto = "http://47.107.239.17:3000/"+res
			
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
	      saleAction(title){
	      	console.log(title)
	      	 this.$prompt('请输入活动详情', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          inputPattern: /.{10,}/,  //正则    最少是10个字符
	          inputErrorMessage: '不能少于10字符'
	        }).then(({ value }) => {
	          //要把数据写到下面的表格中
	          console.log(value)
	           var action = {title:title,info:value}
	           this.ruleForm.saleList.push(action)
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '取消输入'
	          });       
	        });
	      },
      	  handleDelete(index, row) {
               console.log(index, row);
               this.ruleForm.saleList.splice(index,1)//根据索引删除一个
      		},
      	  onSubmit(){
      			//1.先判断规则有没有都通过
      			this.$refs.ruleForm.validate(async (vaild)=>{
      				//valid 验证全通过 vaild 就为true
      				//如果valid 为 真  把ruleFrom 上传给服务器
      				if(vaild){
      					 //把ruleFrom 上传给服务器(向服务器发数据)
      					 var res =await this.$http.post("/addShop/upLoads",this.ruleForm)
      					 console.log(res)
      					 this.$router.push("/shopList")
      				}else{
      					this.$message({
			            type: 'error',
			            message: '表单书写有误，请检查'
			          });       
      				}
      			})
      		}
		}
	}
</script>

<style>
	.addShop {width: 820px; margin-left: 360px;}
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>