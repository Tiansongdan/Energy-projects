<!-- html部分 -->
<template>
	<div id="app">
		<h1>报岗</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='请输入设备名称' v-model='searchdevid'></el-input>
	
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="reportid" label="船队ID" width="130">
				</el-table-column>
				<el-table-column fixed prop="shipname" label="船队名称" width="130">
				</el-table-column>
				<el-table-column fixed prop="capacity"  data="list1" label="装载量(吨)" width="130">
				</el-table-column>
				<el-table-column fixed prop="planjobtime" label="预计到港时间" width="130">
				</el-table-column>
				<el-table-column fixed prop="startjobtime" label="实际到港时间" width="130">
				</el-table-column>
				<el-table-column fixed prop="completetime" label="完成时间" width="130">
				</el-table-column>
				<el-table-column fixed prop="flowid" label="流程" width="130">
				</el-table-column>
				<el-table-column fixed prop="reportuser" label="报岗人" width="130">
				</el-table-column>
				<el-table-column fixed prop="compid" label="所属企业" width="130">
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
			searchdevid:'',
			list:[],	
			};
		},
		methods:{
			fan(){
	
			},
			add(){
				this.$router.push({path:'/produceReportadd'});
			},
			search(){
				
			},
			del(){
				
			},
			update(){
				
			}
		},
		mounted:function(){
							// 后端网址
				var url = this.baseUrl+"/produceReport/list"
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
