<template>
	<div>
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

			}
		},
		mounted:function(){
			$('footer').on('click','li',function(){
				console.log(this)
				$(this).css('color','red').siblings('color','#5D656B')
			})
			
		}
	}
</script>

<style scoped>
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
	}footer ul li{
		text-align: center;
		width:20%
	}
	.icon{margin-left: 27px;}
	.icon-index{
		width: 24px;
		height: 24px;
		display: block;
		background: url(../image/icon/icon-index.png) repeat left top;
	}
	
	.icon-wuliu{
		width: 24px;
		height: 24px;
		display: block;
		background: url(../image/icon/icon-wuliu.png) repeat left top;
	}
	.icon-buycar{
		width: 24px;
		height: 24px;
		display: block;
		background: url(../image/icon/icon-buycar.png) repeat left top;
	}
	.icon-mytaobao{
		width: 22px;
		height: 22px;
		display: block;
		background: url(../image/icon/icon-mytaobao.png) repeat left top;
	}
	.icon-more{
		width: 24px;
		height: 24px;
		display: block;
		background: url(../image/icon/icon-more.png) repeat left top;
	}
</style>