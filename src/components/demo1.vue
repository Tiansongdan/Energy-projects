<!-- html部分 -->
<template>
	<div id="app">
		<router-link to="/demo2">跳转到demo2</router-link>
		<input type="text" v-model="msg"/>
		<h1>{{msg}}</h1>
		<!-- <button @click="app">打印</button> -->
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				msg:"陈大官人"
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
