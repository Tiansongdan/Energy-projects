<!-- html部分 -->
<template>
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='cname' placeholder=''></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:80%' v-model='username' placeholder=''></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='password' placeholder=''></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:80%' v-model='telno' placeholder=''></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='email' placeholder=''></el-input> </el-col>
					
			</el-row>
			
			<el-row>
				<el-col :span="12"> <el-input style='width:80%' v-model='sex' placeholder=''></el-input> </el-col>
					
			</el-row>
		
				<el-row>
					<el-col :span="12"> <el-input style='width:80%' v-model='compid' placeholder=''></el-input> </el-col>
			
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
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				compid:'',
			};
		},
		methods:{
				fan(){
				this.$router.push({path:'/BaseUserlist'});
			},
			save(){
					var url = this.baseUrl+"/BaseUser/insert"
					// 传递给后端的数据
					var data = {cname:this.cname,username:this.username,password:this.password,telno:this.telno,email:this.email,sex:this.sex,
					compid:this.compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/BaseUserlist'});
					
					})
				}

		}
	}
</script>
<!-- css部分 -->
<style>
	
</style>
