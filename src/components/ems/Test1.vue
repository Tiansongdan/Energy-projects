<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="text-align: left;">表格综合</h1>
		<hr/>
		<div class="block">
			<!-- <span class="demonstration">默认</span> -->
			<el-date-picker  v-model="value1"  type="date"  placeholder="选择日期"></el-date-picker>
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
			 </el-select>
			 <el-input v-model="input" placeholder="请输入查询条件" style="width: 170px;" ></el-input>
			 <el-button>查询</el-button>
		</div>
		<div style="text-align: right;">
			<el-button>新增</el-button>
			<el-button>修改</el-button>
		</div>
		<div>
			 <el-table :data="tableData" border style="width: 100%">
				<el-table-column fixed prop="date" label="日期" width="150">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="province" label="省份"  width="120">
				</el-table-column>
				<el-table-column  prop="city"  label="市区"  width="120">
				</el-table-column>
				<el-table-column  prop="address"  label="地址"  width="300">
				</el-table-column>
				<el-table-column  prop="zip"  label="邮编"  width="120">
				</el-table-column>
				<el-table-column  fixed="right"  label="操作"  width="200">   <!-- 是这个的问题 -->
				  <template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				  </template>
				</el-table-column>
			  </el-table>
		</div>
		<div>
			
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				value1:'',
				value:'',
				input:'',
				options:[{label:'选项1'},{label:'选项1'},{label:'选项1'}],
				tableData: [{
					  date: '2016-05-02',
					  name: '王小虎',
					  province: '上海',
					  city: '普陀区',
					  address: '上海市普陀区金沙江路 1518 弄',
					  zip: 200333
					}, {
					  date: '2016-05-04',
					  name: '王小虎',
					  province: '上海',
					  city: '普陀区',
					  address: '上海市普陀区金沙江路 1517 弄',
					  zip: 200333
					}, {
					  date: '2016-05-01',
					  name: '王小虎',
					  province: '上海',
					  city: '普陀区',
					  address: '上海市普陀区金沙江路 1519 弄',
					  zip: 200333
					}, {
					  date: '2016-05-03',
					  name: '王小虎',
					  province: '上海',
					  city: '普陀区',
					  address: '上海市普陀区金沙江路 1516 弄',
					  zip: 200333
					}]
      
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
.block{
	text-align: left;
}
</style>
