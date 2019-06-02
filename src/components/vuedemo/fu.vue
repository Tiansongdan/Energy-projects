<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<zi1></zi1>
		<zi2></zi2>
	</div>
</template>
<!-- js部分 -->
<script>
	import zi1 from './zi1'
	import zi2 from './zi2'
	export default {
		name:'',
		components:{zi1,zi2},
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

</style>
