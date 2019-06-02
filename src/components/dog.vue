<!-- html部分 -->
<template>
	<div id="app">
		<router-link to="/owner">跳转到主人</router-link>
		<h2>小狗汪汪今天吃{{num}}块骨头</h2>
		<h2>小狗汪汪今天跑了{{num1}}圈</h2>
		小狗汪汪
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				num:'',
				num1:''
			};
		},
		methods:{
			
		},
		mounted:function(){
			this.num=this.$route.params.count;
			this.num1=this.$route.params.count1;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
