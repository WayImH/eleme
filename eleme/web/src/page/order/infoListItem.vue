<template>
	<span class="infoBtn" :class="flag?BtnActive:''" @click="check()">{{data}}</span>
</template>

<script>
export default{
	props:["data"],
	data(){
		return {
			flag:false,
			BtnActive:"BtnActive"
		}
	},
	methods:{
		check(){
			this.flag = !this.flag;
			
			if(this.flag){
				this.$parent.$emit("add",this.data)
			}else{
				this.$parent.$emit("reduce",this.data)
			}
			
		}
	}
}
</script>

<style >
.infoBtn { border: 1px solid #42B983; border-radius: 5px; margin: 10px; font-size: 0.6rem;padding: 5px;}
.BtnActive { background: #30e593;}
</style>