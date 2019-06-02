<!-- html部分 -->
<template>
	<div id="app">
		<h1>设备类型</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='设备名称' v-model='search_cname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="typeid" label="ID" width="130">
				</el-table-column>
				<el-table-column fixed prop="typename" label="设备类型" width="130">
				</el-table-column>
				<el-table-column label="操作" width="230">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.userid)">删除</el-button>   
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				search_cname:'',
				list:[]
			};
		},
		methods:{
			
		},
		mounted:function(){
							// 后端网址
				var url = this.baseUrl+"/baseDevtype/list"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
