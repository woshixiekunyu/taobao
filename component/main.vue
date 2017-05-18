<template>
	<div>
		<header>
		</header>
		<router-view></router-view>
		<footer>
			<ul>
				<li @click="index()">
					<i class="icon icon-index"></i>
					<span>首页</span>
				</li>
				<li @click="xiangce()">
					<i class="icon icon-xiangce"></i>
					<span>相册</span>
				</li>
				<li @click="liuyan()">
					<i class="icon icon-liuyan"></i>
					<span>留言区</span>
				</li>
				<li @click="my()">
					<i class="icon icon-mytaobao"></i>
					<span>我的</span>
				</li>
				<li @click="more()">
					<i class="icon icon-more"></i>
					<span>更多</span>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				src:'',
				oldsrc:''
			}
		},methods:{
			index:function(){
				window.location.href="#/main/index"
			},
			liuyan:function(){

				window.location.href="#/main/liuyan"
			},
			my:function(){

				window.location.href="#/main/my"
			},
			more:function(){

				window.location.href="#/main/more"
			},
			xiangce:function(){

				window.location.href="#/main/xiangce"
			},
			
		},
		mounted:function(){
			var self = this;

			
			$('footer').on('click','li',function(){
				var cla = $(this).children('i')[0]._prevClass.slice(5,);
				var fcla = cla +'-on';
				
				self.src = 'url(./image/icon/'+fcla+'.png)';
				$(this).children('i').css('backgroundImage',self.src)
//				console.log(fcla)
				var arr = [];
				for(var i=0;i<4;i++){
					
//					console.log($(this).siblings().children('i')[i]._prevClass.slice(5,))
					arr.push($(this).siblings().children('i')[i]._prevClass.slice(5,));
//					console.log($(this).siblings().children('i')[i])
					self.oldsrc = 'url(./image/icon/'+arr[i]+'.png)'
					$($(this).siblings().children('i')[i]).css('backgroundImage',self.oldsrc)
				}
				
				
				
			})
			
		}
	}
</script>

<style scoped>
	header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.44rem;
		/*background-color: red;*/
		background: linear-gradient(90deg,#ff9000 0,#ff5000 100%);
		z-index: 10;
	}
	footer{
		background-color: #fff;
		border-top: 1px solid #eee;
		padding-top: 5px;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	footer ul{
		width: 100%;
		display: flex;
	}
	footer ul li{
		text-align: center;
		width:20%;
		
	}
	
	.icon{margin: 0 auto;}
	.icon-index{
		width: 0.24rem;
		height: 0.24rem;
		display: block;
		background: url(image/icon/icon-index.png) no-repeat;
		
	}
	
	.icon-xiangce{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-xiangce.png) no-repeat left top;
	}
	.icon-liuyan{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-liuyan.png) no-repeat left top;
	}
	.icon-mytaobao{
		width: 22px;
		height: 22px;
		display: block;
		background: url(image/icon/icon-mytaobao.png) no-repeat left top;
	}
	.icon-more{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-more.png) no-repeat left top;
	}
	.icon-index-on{
		width: 0.24rem;
		height: 0.24rem;
		display: block;
		background: url(image/icon/icon-index-on.png) no-repeat;
		
	}
	
	.icon-xiangce-on{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-xiangce-on.png) no-repeat left top;
	}
	.icon-liuyan-on{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-liuyan-on.png) no-repeat left top;
	}
	.icon-mytaobao-on{
		width: 22px;
		height: 22px;
		display: block;
		background: url(image/icon/icon-mytaobao-on.png) no-repeat left top;
	}
	.icon-more-on{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-more-on.png) no-repeat left top;
	}
</style>