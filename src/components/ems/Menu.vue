<!-- html部分 -->
<template>
	<div id="app">
		<el-menu>
			<span v-for="obj in arr">
				<el-menu-item v-show='!obj.children' :index='obj.index' @click="fn(obj)">
							<span slot="title">{{obj.text}}</span>
				</el-menu-item>
			
		
				<el-submenu v-show="obj.children" :index="obj.index">
					<template slot="title">
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for='item in obj.children' :index='item.index' @click="fn(item)">{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>s
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			arr:[{text:'首页',index:'101' ,url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/addlist'},
						 {text:'人员信息',index:'1022',url:'/BaseUserlist'},
						 {text:'设备类别',index:'1023',url:'baseDevtypelist'},
						 {text:'设备信息',index:'1024',url:'/base_deviceList'},
						 {text:'流程信息',index:'1025',url:'/baseFlowlist'},
						 {text:'故障信息',index:'1026',url:'/produceFaultlist'},
							{text:'维修信息',index:'1026',url:'/produceRepairlist'},
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/produceReportlist'},
					 	 {text:'流产控制',index:'1032'}
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'电耗信息',index:'1041'},
					 	 {text:'水耗信息',index:'1042'},
					 	 {text:'油耗信息',index:'1043'}
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业时间信息',index:'1052'},
					 	 {text:'故障信息',index:'1053'}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'wgylbt',index:'1071',url:'/wgylbt'}
					 ]},
					 {text:'统计信息',index:'108',children:[
						 {text:'作业量信息',index:'1084',url:'/jobAmount'},
						 {text:'港口能源消耗对比图',index:'1085',url:'/devInfo'},
					 	 {text:'成本核算信息',index:'1081',url:'/cost'},
					 	 {text:'设备运行信息对比图',index:'1083',url:'/usage'}
					 ]},
					 {text:'用能单元模型',index:'109',children:[
					 	 {text:'全年能效对比',index:'1091'},
					 	 {text:'能效模型(平均值+~20%)',index:'1092'},
					 	 {text:'同类设备能耗对比',index:'1093'}
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
						  {text:'企业产销模型',index:'10100', url:'/EnergyModel'},
					 	 {text:'产销模型设置',index:'10101'},
					 	 {text:'产销模型展示',index:'10102'}
					 ]},
				]
			};
		},
		methods:{
			 fn(obj){
				 this.$router.push({path:obj.url})
				 var obj={name:obj.text, type:'warning',url:obj.url};
				 this.$store.commit("addtg",obj)
			 }
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-menu{
		background-color: #D3DCE6;
	}

</style>
