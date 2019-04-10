import axios from "axios"
import { MessageBox } from 'element-ui';
import { Loading } from 'element-ui';
axios.defaults.baseURL="http://47.107.239.17:7890"
axios.defaults.timeout=6000
var loading = null;
var count = 0
axios.interceptors.request.use((info)=>{
	if(count==0){
		console.log("开始加载")
		loading=Loading.service();
	}
	count++
	return info
})
axios.interceptors.response.use((info)=>{
	count--
	if(count==0){
		console.log("加载结束")	
		loading.close()
	}
	
	return info
	
},(err)=>{
		loading.close()
		MessageBox({
			title:"error",
			message:"数据加载失败",
			showConfirmButton:true,
			confirmButtonText:"确定",
		})
})
export default axios