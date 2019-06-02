<!-- html部分 -->
<template>
	<div id="app">
		<el-input v-model="count" style="width: 120px;" placeholder="请输入骨头"></el-input>
		<el-input v-model="count1" style="width: 120px;"  placeholder="请输入圈数"></el-input>
	<router-link :to='{name:"dog",params:{count:count,count:count1}}'>跳转到小狗</router-link>
	
	
	主人三毛
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				count:"",
				count1:"",
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
