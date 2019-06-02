<!-- html部分 -->
<template>
	<div>
		<!-- 动态显示各个组件 -->
		<div style="float:left;">
		<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" style="margin-left:20px;" @click="fn(tag,index)" @close="fn2(tag,index)">{{tag.name}}
		</el-tag>
		<!-- 视图出口 -->
		</div>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn(tag,index){
				//路由跳转
				this.$router.push({path:tag.url});
				//改变type
				this.$store.commit('upadateTag',index)
			},
			fn2(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("当前页面不可删除");
				}else{
					
				var falg=this.$store.state.tags[index].type=='warning';
				this.$store.commit('deletetg',index);
				if(falg){
					if(index==0){
						//路由跳转
						this.$router.push({path:this.$store.state.tags[0].url});
						//改变type
						this.$store.commit('upadateTag',0)
					}else{
						//路由跳转
						this.$router.push({path:this.$store.state.tags[index-1].url});
						//改变type
						this.$store.commit('upadateTag',index-1)
					}
				}
				}
		}
	}
	}
</script>
<!-- css部分 -->
<style>

</style>
