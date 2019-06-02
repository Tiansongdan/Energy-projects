<!-- html部分 -->
<template>
	<div style='margin-top: 20px;'>
		<el-row>
			<el-col :span="12"> <el-input style='width:80%' v-model='devid' placeholder='设备id'></el-input> </el-col>
			
			<el-select v-model="devid" placeholder="请选择设备">
				 <el-option  v-for="item in options"  :label="item.devname" :value="item.devid"></el-option>
			</el-select>
			
			<el-col :span="12"> <el-input style='width:80%' v-model='cause' placeholder='故障原因'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='faultuser' placeholder='报告人'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:80%' v-model='faulttime' placeholder='故障时间(分钟)'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="24"> <el-button @click='save()'>添加</el-button> <el-button @click='fan()'>返回</el-button> </el-col>
			</el-row>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			options:[],
			devid:'',
			devname:'',
			faultuser:'',
			faulttime:'',
			cause:'',
			
			
			
			};
		},
		methods:{
			fan(){
				this.$router.push({path:'/produceFaultlist'});
			},
			save(){
					var url = this.baseUrl+"/produceFault/insert"
					// 传递给后端的数据
					var data = {devid:this.devid,devname:this.devname,faultuser:this.faultuser,faulttime:this.faulttime,cause:this.cause,
					};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/produceFaultlist'});
					
					})
				}
			
		},
		
		mounted:function(){			
				var url = this.baseUrl+"/baseDevice/list"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.options=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
