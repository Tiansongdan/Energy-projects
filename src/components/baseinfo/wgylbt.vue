<!-- html部分 -->
<template>
			  <el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in imagesbox " :key="item.id">
				  <h3>{{<img :src="item.idView" class="image">}}</h3>
				</el-carousel-item>
			  </el-carousel>
</template>

<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				imagesbox:[{id:0,idView:require("../../assets/imgs/62fe.png")},
				 {id:1,idView:require("../../assets/imgs/psb.png")},

			};
		},
		methods:{
			
		}
	}
 <script>
<!-- css部分 -->
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
<style>
