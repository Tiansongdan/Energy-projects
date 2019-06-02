<!-- html部分 -->
<template>
	<div style='margin-top: 20px;'>
		<el-row>
			<el-col :span="12"> <el-input style='width:80%' v-model='shipname' placeholder='船队名称'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:80%' v-model='capacity' placeholder='装载量(吨)'></el-input> </el-col>
			 <div class="block">
				<span class="demonstration">预计到港时间</span>
				<el-date-picker
				  v-model="planjobtime"
				  type="date"
				  placeholder="选择日期">
				</el-date-picker>
			  </div>
			   <div class="block">
							   
				<span class="demonstration">实际到港时间</span>
				<el-date-picker
				  v-model="startjobtime"
				  type="date"
				  placeholder="选择日期">
				</el-date-picker>
			  </div>
				
			   <div class="block">
				<span class="demonstration">完成时间</span>
				<el-date-picker
				  v-model="completetime"
				  type="date"
				  placeholder="选择日期">
				</el-date-picker>
			  </div>
			  <el-select v-model="flowid" placeholder="请选择流程">
			  	 <el-option  v-for="item in options"  :label="item.devname" :value="item.devid"></el-option>
			  </el-select>
			  <el-select v-model="reportuser" placeholder="请选择报岗人">
			  	 <el-option  v-for="item in options"  :label="item.devname" :value="item.devid"></el-option>
			  </el-select>
			   <el-select v-model="compid" placeholder="请选择所属企业">
			  	 <el-option  v-for="item in options"  :label="item.devname" :value="item.devid"></el-option>
			  </el-select>
			 
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
			shipname:'',
			capacity:'',
			planjobtime:'',
			startjobtime:'',
			completetime:'',	
			flowid:'',
			reportuser:'',
			compid:'',
			options:[],
			options1:[],
			options2:[],
			};
		},
		methods:{
			fan(){
				this.$router.push({path:'/produceReportlist'});
			},
			save(){
					var url = this.baseUrl+"/produceFault/insert"
					// 传递给后端的数据
					var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,startjobtime:this.startjobtime,
					completetime:this.completetime,flowid:this.flowid,reportuser:this.reportuser,compid:this.compid,
					};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/produceReportlist'});
					
					})
				}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
