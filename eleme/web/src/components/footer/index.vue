<template>
	<div class="footer">
		<div @click="$router.push('/msite')">
			<div>
				<img v-if="active=='/msite'" src="../../assets/myui/饿了么 (6).png"/>
				<img v-else src="../../assets/myui/饿了么 (8).png"/>
			</div>
			<p :style="{color:active=='/msite'?'#26a2ff':'#000'}">外卖</p>
		</div>
		<div @click="$router.push('/search')">
			<div>
				<img v-if="active=='/search'" src="../../assets/myui/搜索 粗  (1).png" />
				<img v-else src="../../assets/myui/搜索 粗  (3).png"/>
			</div>
			<p :style="{color:active=='/search'?'#26a2ff':'#000'}">搜索</p>
		</div>
		<div @click="$router.push('/orderList')">
			<div>
				<img v-if="active=='/orderList'" src="../../assets/myui/菜鸟-订单-单量 (1).png"/>
				<img v-else src="../../assets/myui/菜鸟-订单-单量 (2).png"/>
			</div>
			<p :style="{color:active=='/orderList'?'#26a2ff':'#000'}">订单</p>
		</div>
		<div @click="$router.push('/user')">
			<div>
				<img  v-if="active=='/user'" src="../../assets/myui/我 的 (1).png"/>
				<img v-else src="../../assets/myui/我 的 (2).png"/>
			</div>
			<p :style="{color:active=='/user'?'#26a2ff':'#000'}">我的</p>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	props:["active"]
}
</script>
<style>
.footer {
	position:fixed; bottom: 0; left: 0;  
	height:2.4rem;width: 100%; font-size: 0.6rem;
	background: #fafafa; border-top:1px solid #ddd;
	display: flex; justify-content: space-around;
}
.footer > div { flex: 1; display: flex; flex-direction: column;align-items: center; padding: 0.2rem 0;}
.footer > div > div { width: 40%; position: relative; height: 1.7rem;}
.footer > div > div img {width: 70%; height: auto; position: absolute; left: 0.25rem; top: 0;}
.footer > div > div p{margin-left: -0.2rem;}
</style> 