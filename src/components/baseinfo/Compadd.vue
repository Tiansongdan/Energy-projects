<!-- html部分 -->
<template>
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='compname' placeholder='请输入日期'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:80%' v-model='contacts' placeholder='请输入姓名'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='comptel' placeholder='请输入省份'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:80%' v-model='industry' placeholder='请输入市区'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='address' placeholder='请输入地址'></el-input> </el-col>
					
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
				compname:'',
				contacts:'',
				comptel:'',
				industry:'',
				address:''
			};
		},
		methods:{
// 			
			fan(){
				this.$router.push({path:'/addlist'});
			},
			save(){
					var url = this.baseUrl+"/baseCompany/insert"
					// 传递给后端的数据
					var data = {compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industry,address:this.address};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/addlist'});
					
					})
				}
		}
		
	}
</script>
<!-- css部分 -->
<style>
	div{
		
	}
</style>
