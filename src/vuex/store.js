import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
	v1:'',
	v2:'',
	color:'',
	loginFlag:false,
	 tags: [
	  { name: '首页', type:'', url:'/' },
	]
}
// mutations对象用来存储方法
var mutations = {
// 	colorname为传过来的参数
// 	changcolor(state,colorNname){
// 		state.color=colorNname
// 	}
	addtg(state,obj){
		//初始化颜色
		for (var color of state.tags) {
			color.type='info'
		}
		//处理重复
		for (var color of state.tags) {
			if(color.name==obj.name){
				color.type='warning'
				return;
			}
		}
		state.tags.push(obj)
	},
	deletetg(state,index){
		state.tags.splice(index,1);
		},
	upadateTag(state,index){
		for (var color of state.tags) {
			color.type='info'
		}
		state.tags[index].type='warning';
	}	
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})