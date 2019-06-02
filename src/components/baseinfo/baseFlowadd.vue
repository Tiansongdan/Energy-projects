<!-- html部分 -->
<template>
	<div>
	
		<el-row>
			<el-col :span="12"> <el-input style='width:80%' v-model='flowname' placeholder='流程姓名'></el-input> </el-col>	
		</el-row>
		<el-row>
			<el-select v-model="dljid" placeholder="请选择斗轮机">
				 <el-option  v-for="item in options"  :label="item.devname" :value="item.devid"></el-option>
			</el-select>
			<el-select v-model="zcjid" placeholder="请选择装船机">
				 <el-option  v-for="item in options1"  :label="item.devname" :value="item.devid"></el-option>
			</el-select>
			<el-select v-model="pdjid" placeholder="请选择皮带机">
				 <el-option  v-for="item in options2"  :label="item.devname" :value="item.devid"></el-option>
			</el-select>
		</el-row>
		<el-row>
			
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
				options2:[],
				
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				devname:'',
				devid:'',
				
			};
		},
		methods:{
			
			fan(){
			this.$router.push({path:'/baseFlowlist'});
				},
			save(){
					var url = this.baseUrl+"/baseFlow/insert"
					// 传递给后端的数据
					var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,
					};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.$message("添加成功")
						this.$router.push({path:'/baseFlowlist'});
					
					})
			
		}
		},
		mounted:function(){
							// 后端网址
				var url = this.baseUrl+"/baseDevice/findDljByCompid"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.options=res.data;
				})
				
							// 后端网址
				var url = this.baseUrl+"/baseDevice/findCzjByCompid"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.options1=res.data;
				})
				
							// 后端网址
				var url = this.baseUrl+"/baseDevice/findPdjByCompid"
				// 传递给后端的数据
				// var data = {compname:this.compname};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.options2=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
