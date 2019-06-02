<!-- html部分 -->
<template>
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='devname' placeholder='设备名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-select v-model="typeid" placeholder="请选择设备类别">
					 <el-option  v-for="item in options"  :label="item.typename" :value="item.typeid"></el-option>
				</el-select>
				<el-select v-model="compid" placeholder="请选择所属企业">
					 <el-option  v-for="item in options1"  :label="item.compname" :value="item.compid"></el-option>
				</el-select>
			</el-row>
			<el-row>
				<el-col :span="12">  
					<div class="block" >
						<el-date-picker value-format="yyyy-MM-dd" v-model="devdate" type="date" placeholder="选择日期">
						</el-date-picker>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='devuser' placeholder='责任人'></el-input> </el-col>	
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
				options1:[],
				
				typeid:'',
				compid:'',
			
				
				devid:'',
				devname:'',
				compid:'',
				devdate:'',
				devuser:''
			};
		},
		methods:{
				fan(){
				this.$router.push({path:'/base_devicelist '});
			},
			save(){
					var url = this.baseUrl+"/baseDevice/insert"
					// 传递给后端的数据
					var data = {devname:this.devname,typeid:this.typeid,compid:this.compid,devdate:this.devdate,devuser:this.devuser,
					};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/base_devicelist'});
					
					})
				}

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
				this.options=res.data;
			})
			
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			// var data = {compname:this.compname};
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.options1=res.data;
			})
		}
						// 后端网址
			
		
	}
</script>
<!-- css部分 -->
<style>
	
</style>
