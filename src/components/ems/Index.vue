<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<el-container>
		  <el-header>
			  <Top></Top>
			  </el-header>
		  <el-container>
			<el-aside width="200px">
				<Menu></Menu>
			</el-aside>
			<el-main>
				<Main></Main>
			</el-main>
		  </el-container>
		</el-container>
	</div>
</template>
<!-- js部分 -->
<script>
	import Menu from './Menu'
	import Main from './Main'//静态路由
	import Top from './Top'
	export default {
		name:'',
		components:{Menu,Main,Top},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
	/* 头 */
	.el-header {
				background-color: #B3C0D1;
				color: #333;
				text-align: center;
				line-height: 60px;
			  }
			  /* 左 */
			  .el-aside {
					background-color: #D3DCE6;
					color: #333;
					text-align: left;
					line-height: 200px;
				  }
			  /* 右 */
			  .el-main {
					background-color: #E9EEF3;
					color: #333;
				
					line-height: 60px;
				  }
			 .el-container.is-vertical{
					  height: 100%;
				  }
			  
				  
</style>
