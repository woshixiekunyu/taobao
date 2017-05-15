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
				<i class="icon icon-news">
					<span class="num">{{num}}</span>
				</i>
				
				<span>消息</span>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				num:8
			}
		},methods:{
			goodsSearch:function(){
				window.location.href="#/goodsSearch"
			}
		},
		mounted:function(){
			if(window.location.hash == '#/main/index'){
				console.log($('footer ul').children('li').eq(0).children('i'))
				$('footer ul').children('li').eq(0).children('i').css('backgroundImage','url(./image/icon/icon-index-on.png)')
			}
			if(this.num>9){
				this.num = '...'
			}else if(this.num<=''){
				this.num = ''
			}else{
				$('.num').css('width',0).css('height',0).css('right','0.03rem')
			}
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
		position: relative;
		margin: 0 auto;
	}
	header>div:nth-child(3)>i>.num{
		position: absolute;
		right: 0;
		top: 0;
		color:#fff;
		line-height: 10px;
		text-align: left;
		display: inline-block;
		width: 10px;
		height: 10px;
		background: #f00;
		border-radius: 50%;
	}
</style>