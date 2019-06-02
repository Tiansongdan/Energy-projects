import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/ems/Index.vue'

import welcome from '@/components/ems/welcome'

import login from '@/components/ems/login'//登录组件
import addlist from '@/components/baseinfo/addlist'//子组件
import BaseUserlist from '@/components/baseinfo/BaseUserlist'//子组件
import baseFlowlist from '@/components/baseinfo/baseFlowlist'//子组件
import baseFlowadd from '@/components/baseinfo/baseFlowadd'//子组件
import base_deviceList from '@/components/baseinfo/base_deviceList'//子组件
import base_deviceadd from '@/components/baseinfo/base_deviceadd'//子组件
import color from '@/components/vuedemo/color'//父组件
import Compadd from '@/components/baseinfo/Compadd'//子组件
import Baseadd from '@/components/baseinfo/Baseadd'//子组件

import produceFaultlist from '@/components/baseinfo/produceFaultlist'//子组件
import produceFaultadd from '@/components/baseinfo/produceFaultadd'//子组件


import produceRepairlist from '@/components/baseinfo/produceRepairlist'//子组件
import produceRepairadd from '@/components/baseinfo/produceRepairadd'//子组件


import produceReportlist from '@/components/baseinfo/produceReportlist'//子组件
import produceReportadd from '@/components/baseinfo/produceReportadd'//子组件

import baseDevtypelist from '@/components/baseinfo/baseDevtypelist'//子组件
import baseDevtypeadd from '@/components/baseinfo/baseDevtypeadd'//子组件
import wgylbt from '@/components/baseinfo/wgylbt'
import jobAmount from '@/components/baseinfo/jobAmount'
import devInfo from '@/components/baseinfo/devInfo'
import cost from '@/components/baseinfo/cost'
import EnergyModel from '@/components/baseinfo/EnergyModel'
import usage from '@/components/baseinfo/usage'
import Compedit from '@/components/baseinfo/Compedit'
import fu from '@/components/vuedemo/fu'//父组件
Vue.use(Router)
baseFlowadd
export default new Router({
	mode:'history',
  routes: [
		{path:'/login', name:'login',component:login},
    {
      path: '/',
      name: 'Index',
      component: Index,
			children:[{path:'addlist',component:addlist,name:'addlist'},
								{path:'BaseUserlist',component:BaseUserlist},
								{path:'base_deviceList',component:base_deviceList},
								{path:'baseFlowlist',component:baseFlowlist},
								{path:'baseFlowadd',component:baseFlowadd},
								{path:'Compadd',component:Compadd},
								{path:'base_deviceadd',component:base_deviceadd},
								{path:'Baseadd',component:Baseadd},
								{path:'produceFaultlist',component:produceFaultlist},
								{path:'produceFaultadd',component:produceFaultadd},
								{path:'produceRepairlist',component:produceRepairlist},
								{path:'produceRepairadd',component:produceRepairadd},
								{path:'produceReportlist',component:produceReportlist},
								{path:'produceReportadd',component:produceReportadd},
								{path:'baseDevtypelist',component:baseDevtypelist},
								{path:'baseDevtypeadd',component:baseDevtypeadd},
									{path:'wgylbt',component:wgylbt},
								{path:'jobAmount',component:jobAmount},
								{path:'EnergyModel',component:EnergyModel},
								{path:'devInfo',component:devInfo},
								{path:'cost',component:cost},
								{path:'usage',component:usage},
								{path:'Compedit',component:Compedit,name:'Compedit'},
								{path:'/',component:welcome}]
								
    },
	
			{
		  path: '/fu',
		  component: fu,
		},
			{
		  path: '/color',
		  component: color,
		},
		{
		  path: '/Compadd',
		  component: Compadd,
		},
		{
		  path: '/welcome',
		  component: welcome,
		},
		
	
		
		
  ]
})
