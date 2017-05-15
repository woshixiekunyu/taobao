<template>
	<div>
		<header>
			<div>
				<i class="icon icon-saoyisao"></i>
				<span>扫一扫</span>
			</div>
			<div>
				<i class="icon icon-search"></i>
				<span @click="goodsSearch()">长袖男装</span>
				<i class="icon icon-camera"></i>
			</div>
			<div>
				<i class="icon icon-news"></i>
				<span v-text="num" class="num"></span>
				<span>消息</span>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				num:0
			}
		},methods:{
			goodsSearch:function(){
				window.location.href="#/goodsSearch"
			}
		},
		mounted:function(){
			
		}
	}
</script>

<style scoped>
	header{

		width: 100%;
		color: #fff;
		height: 0.38rem;
		position: fixed;
		top: 0;
		display: flex;
		padding: 3px 0;
	}
	header>div{
		width: 15%;
		text-align: center;
	}
	
	header>div:nth-child(2){
		width: 70%;
		border-bottom: 1px solid #fff;
		display: flex;
		height: 25px;
		margin-top: 8px;
		padding-top: 5px;
	}
	header>div>i{
		display: block;
		width: 24px;
		height: 24px;
		
	}
	header>div:nth-child(1)>i{
		background: url('image/icon/icon-saoyisao.png') no-repeat;
		margin: 0 auto;
	}
	header>div:nth-child(2)>i:nth-child(1){
		background: url('image/icon/icon-search.png') no-repeat;
		width: 10%;
	}
	header>div:nth-child(2)>span{
		display: block;
		width: 80%;
		text-align: left;
	}
	header>div:nth-child(2)>i:nth-child(3){
		background: url('image/icon/icon-camera.png') no-repeat;
		width: 10%;
	}
	header>div:nth-child(3)>i{
		background: url('image/icon/icon-news.png') no-repeat;
		margin: 0 auto;
	}
	header>div:nth-child(3)>.num{
		position: absolute;
		right: 0.1rem;
		top: 0;
		color:#000;
		background-color: #red;
	}
</style>