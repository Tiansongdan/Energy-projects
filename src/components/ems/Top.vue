<!-- html部分 -->
<template>
	<div style="text-align:left;">
		<span style="font-size: 25px;color: white;">
			能源消耗综合表	
		</span>
		<div style="float:right; display: inline-block;margin-right: 40px; " >
		<el-row class="block-col-2">
		
				<el-dropdown>
				  <span class="el-dropdown-link">
					周口港<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-plus">舒庄港</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus">信阳港</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus-outline">项城港</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
		
		</el-row>
		</div>
		<div style="float:right; display: inline-block; margin-right: 40px; " >
		<el-row class="block-col-2">
		
				<el-dropdown>
				  <span class="el-dropdown-link">
					管理员<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
		
		</el-row>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
	el-select{
		margin-top: -px;;
	}
</style>
