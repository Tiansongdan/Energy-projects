<!-- html部分 -->
<template>
	<div id="app">
			<div class="asa">
						
			  <div class="block">
				<span class="demonstration"></span>
				<el-date-picker
				  v-model="year"
				  	value-format="yyyy"
				  type="year"
				  placeholder="选择年">
				</el-date-picker>
				<el-button @click='search' >查询</el-button>
			  </div>		
				</div>	
		
			<h1 class="h1">企业能耗比对比图</h1>
		  <ve-line :data="chartData1"></ve-line>
		  <h1 class="h1">企业作业量对比图</h1>
		  <ve-histogram :data="chartData2"></ve-histogram>
		  <h1 class="h1">企业作业量对比图</h1>
		  <ve-histogram :data="chartData3"></ve-histogram>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		
		data() {
			return {
				  chartData1: {},
					chartData2: {},
					chartData3: {},
					year:'2018'
			};
		},
		methods:{
		search(){
			var url = this.baseUrl+"/jobAmount/flowAmount"
			// 传递给后端的数据
			var data = {year:this.year};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
			this.chartData1=res.data
				
			})
			
			
			
			
			var url = this.baseUrl+"/jobAmount/devTypeAmount"
			// 传递给后端的数据
			var data = {year:this.year};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
			this.chartData2=res.data
				
			})
			
			
			
			
			
			var url = this.baseUrl+"/jobAmount/devAmount"
			// 传递给后端的数据
			var data = {year:this.year};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
			this.chartData3=res.data
				
			})
		}
		},
		mounted(){
				this.search()
		}
	}
</script>
<!-- css部分 -->
<style>
.h1{
	text-align: center;
}

.asa{
	margin-top: 30px;
}
#zx{
	text-align: right;
}


</style>
