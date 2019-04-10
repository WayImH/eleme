<template>
	<div class="login">	
	<transition name="fade">
		<div class="login-con" v-if="flag">
		<h2 class="tex">MT后台管理系统</h2>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			 <el-form-item prop="username" >
  			 	<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
  			 </el-form-item>
  			  <el-form-item prop="pwd" >
  			 	<el-input type="password" v-model="ruleForm.pwd" placeholder="密码"></el-input>
  			 </el-form-item>
		</el-form>
		 <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;">登录</el-button>
		 <div class="logintext">
		<p>温馨提示</p>
		<p>未登录过的新用户，自动注册</p>
		<p>注册过的用户可凭账号密码登录</p>
	</div>
	</div>
	
	</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				ruleForm:{
					username:"",
					pwd:""
				},
				rules:{
					username:[
							{ required: true, message: '请输入用户名', trigger: 'blur' },
							{ min: 2, max: 12, message: '长度在 2 到 12个字符', trigger: 'blur' }
					],
					pwd:[
							{ required: true, message: '请输入密码', trigger: 'blur' },
							{ min: 3, max: 16, message: '长度在3 到 16个字符', trigger: 'blur' },
							 
					]
				}
			}
		},
		mounted(){
			this.flag=true
		},
		methods:{
			submitForm(){
				this.$refs.ruleForm.validate(async (valid)=>{
					if(valid){
				      var res= await this.$http.post("/login",this.ruleForm).then(res=>{
							 this.$message({
						         	      showClose:true,
						         	      message:res.data.message,
						        	  	  type:res.data.state
						        		})
				        	if(res.data.status){
				        		this.$store.commit("changename",this.ruleForm.username)
				        		this.$router.push("/index");
	
				        	}

				        })
					}else{
						  this.$message({
				          showClose: true,
				          message: '用户名或密码错误'
				        });
					}
				})
				
				



			}
		}
	}
</script>

<style scoped>

	.login{
		background: #324057;
	}
	.login-con{
		
		background: #fff;width: 500px;height: 260px;border-radius: 10px;
		position: fixed;left:50%;top:50%;transform: translate(-50%,-50%);
		padding: 50px;
	}
	.logintext p{
		color:#f30;
		font-size: 14px;
		text-align: center;
		
	}
	.tex{
		position: fixed;top: -70px;color: #Fff;margin-left: 200px;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;transform:translate(-50%,-100%) 
	}
	.fade-enter-active,.fade-leave-active{
		transition:transform 2s;
	}
	
</style>