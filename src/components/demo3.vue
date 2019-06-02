<!-- html部分 -->
<template>
	<div id="app">
		<el-input type="text" v-model="username" class='sty' placeholder="请输入用户名"></el-input>
		<el-input type="text" v-model="password" class='sty' placeholder="请输入密码"></el-input>
			<el-button @click="but">登录</el-button>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			username:'',
			password:''
			};
		},
		methods:{
			but:function(){
				if(this.username=='admin' && this.password=='123456'){
					 this.$message('登录成功');
				}else{
					 this.$message('登录失败');
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.sty{
	width: 120px;
}
</style>
