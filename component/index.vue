<template>
	<div>
		<header>

			<div>
				<i class="icon icon-saoyisao"></i>
				<span>扫一扫</span>
			</div>
			<div>
				<i class="icon icon-search"></i>
				<span @click="goodsSearch()">足迹</span>
				<i class="icon icon-camera"></i>
			</div>
			<div>
				<i class="icon icon-news">
					<span class="num">{{num}}</span>
				</i>
				
				<span>消息</span>
			</div>
		</header>
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav0.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav1.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav2.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav3.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav4.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav5.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav6.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="image/swiper-nav7.jpg" /></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		
		
		<main>
			<nav>
				<ul>
					<li>
						<img class="nav-img" src="image/tianmao.png"/>
						<span>你</span>
					</li>
					<li>
						<img class="nav-img" src="image/juhuasuan.png"/>
						<span>我</span>
					</li>
					<!--<li>
						<img class="nav-img" src="image/tianguo.png"/>
						<span>天猫国际</span>
					</li>-->
					<li>
						<img class="nav-img" src="image/waimai.png"/>
						<span>日记</span>
					</li>
					<li>
						<img class="nav-img" src="image/tianmark.png"/>
						<span>问答</span>
					</li>
					<li>
						<img class="nav-img" src="image/chongzhi.png"/>
						<span>悄悄话</span>
					</li>
					<li>
						<img class="nav-img" src="image/feilv.png"/>
						<span>签到</span>
					</li>
					<li>
						<img class="nav-img" src="image/getjinbi.png"/>
						<span>资产</span>
					</li>
					<li>
						<img class="nav-img" src="image/paimai.png"/>
						<span>其他</span>
						
					</li>
					<!--<li>
						<img class="nav-img" src="image/fenlei.png"/>
						<span>分类</span>
					</li>-->
				</ul>
			</nav>
			<div class="xindong">
				<h2>心动区</h2>
				<div class="hotdisc">
					<ul v-for="con in content">
						<li>{{con.content}}</li>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	require('../dist/js/swiper.js')
	export default {
	data: function() {
		return {
			num: 8,
			color:'red',
			content:''
		}
	},
	methods: {
		goodsSearch: function() {
			window.location.href = "#/goodsSearch"
		},

		
	},
	mounted: function() {
		var self = this;
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
		
		var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				//自动播放
				autoplay : 1000,
				//无缝播放
				loop : true,
				//添加数量
				loopAdditionalSlides : 1,
				
				//swiper手动改滑动之后，swiper可以继续自动播放
				autoplayDisableOnInteraction : false,
		});
		
//		$.ajax({
//			url:'./link/data/getdoc.json',
//			type:'GET',
//			dataType:'json',
//			success:function(data){
//				console.log(data)
//				self.content = data
//			}
//		})
	}
}
</script>

<style scoped>
header {
	
	color: #fff;
	height: 0.38rem;
	position: fixed;
	top: 0;
	display: flex;
	padding: 3px 0;
	z-index: 100;
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
	text-align: center;
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
.swiper-container{
	margin-top: 0.44rem;
}
main>nav{
	padding: 0 0.15rem;
	background-color: #fff;
}
main>nav>ul{
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	margin: 0 auto;
	/*padding-left: 0.15rem;*/
	/*margin-left: 0.15rem;*/
}
main>nav>ul>li{
	margin-top: 0.1rem;
	text-align: center;
	width: 25%;
	
}
main>nav>ul>li:nth-child(1){
	margin-left: 0;
}
main>nav>ul .nav-img{
	width: 100%;
}
main>nav>ul>li>span{
	display: block;
	font-size:12px;
	line-height: 20px;
}
main>.xindong{background-color: #fff;}
main>.xindong h2{
	line-height: 30px;
	border-top: 1px solid orangered ;
	box-shadow: 0 0 0.06rem #ffff00 inset;
	
	text-shadow: 0 0 10px #FF4500;
	color: #FF0000;
}
main>.xindong>span{
	display: block;
	width: 0.8rem;
	/*height: 0.4rem;*/
	padding-top: 10px;
	text-align: center;
	border-right: 1px solid #ccc;
}

</style>