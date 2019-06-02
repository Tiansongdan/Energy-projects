<!-- html部分 -->
<template>
	<div>
		<h1>子组件2</h1>
		<div id="c2" :style="{background:$store.state.color}"></div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
#c2{
	width: 180px;
	height: 180px;
	border: solid #13CE66 1px;
}
</style>
