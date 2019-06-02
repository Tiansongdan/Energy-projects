<!-- html部分 -->
<template>
	<div id="app">
		<router-link to="/">跳转到首页</router-link>
		<input type="text" v-model="msg"/>
		<h1>{{msg}}</h1>
		<el-button @click='fn'>打印</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		
		data() {
			return {
				msg:'陈小狗',
			};
		},
		methods:{
			fn:function() {
				console.log(this.msg)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
