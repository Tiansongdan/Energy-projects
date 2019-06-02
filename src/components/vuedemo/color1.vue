<!-- html部分 -->
<template>
	<div >
		<h1>子组件1</h1>
		<el-input style='width: 120px;' v-model='color'></el-input>
		<el-button @click='fn'>改变颜色</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				color:'',
			};
		},
		methods:{
			fn(){
				this.$store.commit('changcolor',this.color)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
