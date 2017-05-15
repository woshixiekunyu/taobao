<template>
	<div>
		<header>
		</header>
		<router-view></router-view>
		<footer>
			<ul>
				<li>
					<i class="icon icon-index"></i>
					<span>首页</span>
				</li>
				<li>
					<i class="icon icon-wuliu"></i>
					<span>物流</span>
				</li>
				<li>
					<i class="icon icon-buycar"></i>
					<span>购物车</span>
				</li>
				<li>
					<i class="icon icon-mytaobao"></i>
					<span>我的淘宝</span>
				</li>
				<li>
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
				
				
//				console.log(arr)
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
		z-index: -10;
	}
	footer{
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
	
	.icon-wuliu{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-wuliu.png) no-repeat left top;
	}
	.icon-buycar{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-buycar.png) no-repeat left top;
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
	
	.icon-wuliu-on{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-wuliu-on.png) no-repeat left top;
	}
	.icon-buycar-on{
		width: 24px;
		height: 24px;
		display: block;
		background: url(image/icon/icon-buycar-on.png) no-repeat left top;
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