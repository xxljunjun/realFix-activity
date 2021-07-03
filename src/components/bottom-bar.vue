<template>
	<div class="buttom-bar">
		{{$store.state.largemsg}}
	</div>
</template>

<script>
/**
  @description 该组件是vant组件库二次封装的遮罩弹窗
  @tutorial
  @property {Boolean} isShowPop 控制弹窗显示与隐藏
  @example <WinnerPopup :isShowPop.sync="isShow" />
 */
	export default {
		data(){
			return{

			}
		},
		mounted(){
			console.log("000000",this.$store)
		},
		methods:{

		},
		components:{

		}
	}
</script>

<style lang="scss" scoped>
.buttom-bar{
	width:100%;
	height:100px;
	background:red;
	position:fixed;
	bottom:0;
	left:0;
}
</style>