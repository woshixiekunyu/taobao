<template>
	<div>
		<header>
			<i class="icon icon-jiantou" @click="back()"></i>
			<div class="search">
				<input type="text" v-model="goodsName" id="goodsName"/>
				<i class="icon icon-camera"></i>
			</div>
			<span class="searchGoods">搜索</span>
		</header>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				goodsName:'',
				tips:''
			}
		},methods:{
			back:function(){
				window.history.back()
			}
		},
		mounted:function(){
			$('#goodsName').attr('placeholder',this.tips)
		}
	}
</script>

<style scoped>
	header{
		padding: 0.1rem;
		display: flex;
		height: 0.2rem;
		font-size: 0.12rem;
	}
	header>.icon{
		display: block;
		width: 16px;
		height: 16px;
	}
	header>.icon-jiantou{
		background: url('image/icon/icon-jiantou.png') no-repeat;
		margin-top: 2px;
		width: 8%;
	}
	header>.search{
		width: 80%;
		border-bottom: 1px solid #888;
		display: flex;
	}
	header>.search>input{
		border: 0;
		outline: none;
		width: 100%;
	}
	header .icon-camera{
		width: 16px;
		height: 16px;
		display: block;
		background: url('image/icon/icon-camera-on.png');
	}
	header .searchGoods{
		color:#fff;
		width: 12%;
		margin-left: 10px;
		text-align: center;
		line-height: 20px;
		border-radius: 10px;
		height: 20px;
		background: #FF0000;
	}
</style>