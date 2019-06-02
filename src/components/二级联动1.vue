<!-- html部分 -->
<template>
	<div id="app">
		<el-input v-model="count" style="width: 120px;" placeholder="请输入城市"></el-input>
		<router-link :to='{name:"二级联动",params:{count:count,count:count1}}'>跳转到城市</router-link>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			count:"",	
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
