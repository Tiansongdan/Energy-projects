<!-- html部分 -->
<template>
<div id="app">	
		<el-select v-model="v1" placeholder="请选择" @change="v2=''">
			<el-option v-for="(obj,index) in arr" :value="index" :label="obj.label"></el-option>
		</el-select>
		<el-select v-model="v2" placeholder="请选择">
			<el-option v-for="(obj,index) in arr[v1].children" :value="obj.value" :label="obj.label"></el-option>
		</el-select>
		<h1>{{qw}}</h1>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			
			return {
				v1:0,
				v2:'',
				qw:'',
				arr:[{label:'河南',value:'p01',children:[{label:'周口',value:'c01'},{label:'焦作',value:'c02'}]},
				{label:'广州',value:'p02',children:[{label:'广州',value:'c03'},{label:'东莞',value:'c04'}]}]
			};
		},
		methods:{
		
		},
		mounted:function(){
			var cs=this.route.params.count;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
