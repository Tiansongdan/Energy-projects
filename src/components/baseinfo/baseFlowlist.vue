<!-- html部分 -->
<template>
	<div id="app">
		<h1>流程信息</h1>
		 <div style="text-align: left;">
			<el-input style='width: 180px;' placeholder='设备名称' v-model='search_flowname'></el-input>
		
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="flowid" label="id" width="130">
				</el-table-column>
				<el-table-column fixed prop="flowname" label="姓名" width="130">
				</el-table-column>
				<el-table-column fixed prop="dljname" label="斗轮机" width="130">
				</el-table-column>
				<el-table-column fixed prop="zcjname" label="装船机" width="130">
				</el-table-column>
				<el-table-column fixed prop="pdjname" label="皮带机" width="130">
				</el-table-column>
				<el-table-column fixed prop="compcname" label="所属公司" width="130">
				</el-table-column>
				
				<el-table-column label="操作" width="230">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>   
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
				search_flowname:'',
				list:[]
			};
		},
		methods:{
			add(){
				this.$router.push({path:'/baseFlowadd'});
			},
			del(){
				
			},
			search(){
				
			}
			
			
		},
		mounted:function(){
							// 后端网址
				var url = this.baseUrl+"/baseFlow/list"
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
