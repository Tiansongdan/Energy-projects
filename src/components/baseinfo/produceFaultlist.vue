<!-- html部分 -->
<template>
	<div id="app">
		<h1>故障信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='请输入设备名称' v-model='searchdevid'></el-input>

			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="devid" label="设备ID" width="130">
				</el-table-column>
				<el-table-column fixed prop="devname"  data="list1" label="设备名称" width="130">
				</el-table-column>
				<el-table-column fixed prop="cause" label="故障原因" width="130">
				</el-table-column>
				<el-table-column fixed prop="faultuser" label="报告人" width="130">
				</el-table-column>
				<el-table-column fixed prop="faulttime" label="故障时间(分钟)" width="130">
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
				list1:[]
			};
		},
		methods:{
			
			fan(){
				this.$router.push({path:'/produceFaultlist'});
			},
			add(){
				this.$router.push({path:'/produceFaultadd'});
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
				var url = this.baseUrl+"/produceFault/list"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list=res.data;
				})
				
				var url = this.baseUrl+"/baseDevice/list"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list1=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
