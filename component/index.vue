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
		
		<!-- Swiper -->
		<div class="swiper-nav">
			<div class="swiper">
				<ul>
					<li><img class="slide-img" src="image/swiper-nav0.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav1.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav2.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav3.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav4.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav5.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav6.jpg"/></li>
					<li><img class="slide-img" src="image/swiper-nav7.jpg"/></li>
				</ul>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-page"></div>
		</div>
	</div>
</template>

<script>export default {
	data: function() {
		return {
			num: 8,
			$idx:'',
			$len:'',
			$width:''
		}
	},
	methods: {
		goodsSearch: function() {
			window.location.href = "#/goodsSearch"
		},
		swipering:function(){
			var self = this;
			//设置图片宽度
			this.$width = $('body').innerWidth();
			
			var ulist = $('.swiper').children('ul')
			//图片数量
			this.$len = ulist.children().length;
			//图片轮播
//			console.log(this.$width)
			this.$idx = 0;
			var timer = setInterval(function(){
				self.$idx++;
				if(self.$idx > self.$len){
					ulist.css('left',0)
					self.$idx=1;
				}else if(self.$idx < 0){
					self.$idx = self.$len-1
				}
//				console.log(self.$idx)
//				console.log(self.$width)
				ulist.animate({'left':-self.$width*self.$idx})
			},2000)
		}
	},
	mounted: function() {
		//默认首页高亮
		if(window.location.hash == '#/main/index') {
			console.log($('footer ul').children('li').eq(0).children('i'))
			$('footer ul').children('li').eq(0).children('i').css('backgroundImage', 'url(./image/icon/icon-index-on.png)')
		}
		
		//右上角消息数量显示
		if(this.num > 9) {
			this.num = '...'
		} else if(this.num <= '') {
			this.num = ''
		} else {
			$('.num').css('width', 0).css('height', 0).css('right', '0.03rem')
		}

		//轮播图区域
		this.$width = $('body').innerWidth();
		//设置图片宽度
		$('.slide-img').css('width',this.$width);
		//ul列表
		var ulist = $('.swiper').children('ul');
		
		//图片数量
		this.$len = ulist.children().length;
//		console.log($len)
		
		
		
		this.swipering();
		//获取第一张图片的src
		var $cloneAttr = ulist.children().eq(0).children().eq(0).attr('src')
		//创建图片并复制第一张图片的路径
		var $cloneImg = $('<img/>').attr('src',$cloneAttr).css('width',this.$width)
		
		$('<li/>').append($cloneImg).appendTo(ulist)
//		console.log(ulist.children())
		
		
		
	}
}</script>

<style scoped>header {
	width: 100%;
	color: #fff;
	height: 0.38rem;
	position: fixed;
	top: 0;
	display: flex;
	padding: 3px 0;
}

header>div {
	width: 15%;
	text-align: center;
}

header>div:nth-child(2) {
	width: 70%;
	border-bottom: 1px solid #fff;
	display: flex;
	height: 25px;
	margin-top: 0.08rem;
	padding-top: 0.05rem;
}

header>div>i {
	display: block;
	width: 24px;
	height: 24px;
}

header>div:nth-child(1)>i {
	background: url('image/icon/icon-saoyisao.png') no-repeat;
	margin: 0 auto;
}

header>div:nth-child(2)>i:nth-child(1) {
	background: url('image/icon/icon-search.png') no-repeat;
	width: 10%;
}

header>div:nth-child(2)>span {
	display: block;
	width: 80%;
	text-align: left;
}

header>div:nth-child(2)>i:nth-child(3) {
	background: url('image/icon/icon-camera.png') no-repeat;
	width: 10%;
}

header>div:nth-child(3)>i {
	background: url('image/icon/icon-news.png') no-repeat;
	position: relative;
	margin: 0 auto;
}

header>div:nth-child(3)>i>.num {
	position: absolute;
	right: 0;
	top: 0;
	color: #fff;
	line-height: 10px;
	text-align: left;
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #f00;
	border-radius: 50%;

}
.swiper-nav{
	width: 100%;
	margin-top: 0.44rem;
	position: relative;
}
.swiper-nav ul{
	display: flex;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
}
.swiper-nav img{
	width: 100%;
}
</style>