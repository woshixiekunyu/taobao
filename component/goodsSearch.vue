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
		<nav>
			<!--一个数组做法-->
			<!--<span :class="{page:pagearr[page][0]}" @click="pages(0)">全部</span>
			<span :class="{page:pagearr[page][1]}" @click="pages(1)">天猫</span>
			<span :class="{page:pagearr[page][2]}" @click="pages(2)">店铺</span>-->
			<!--//条件数组做法-->
			<span :class="{page:pagearr[0]}" @click="pages(0)">全部</span>
			<span :class="{page:pagearr[1]}" @click="pages(1)">天猫</span>
			<span :class="{page:pagearr[2]}" @click="pages(2)">店铺</span>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				goodsName:'',
				tips:'',
				//一个数组做法
//				pagearr:[[1,0,0],[0,1,0],[0,0,1]],
//				page:0
				//条件数组做法
				pagearr:[1,0,0],

			}
		},
		methods:{
			back:function(){
				window.location.href="#/main/index"
			},
			pages(page){
				if(page === 0){
					this.pagearr=[1,0,0];
					window.location.href="#/goodsSearch/searchAll"
				}else if(page === 1){
					this.pagearr=[0,1,0];
					window.location.href="#/goodsSearch/searchTianmao"
				}else{
					this.pagearr=[0,0,1];
					window.location.href="#/goodsSearch/searchShop"
				}
				//数组做法
//				this.pagearr=[[1,0,0],[0,1,0],[0,0,1]]
//				this.page = page
				
			}
		},
		mounted:function(){
			$('#goodsName').attr('placeholder',this.tips) 
		}
	}
</script>

<style scoped>
	header{
		background-color: #fff;
		padding:  0.1rem;
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
		margin-right: 20px;
		text-align: center;
		line-height: 20px;
		border-radius: 10px;
		height: 20px;
		background: #FF0000;
	}
	nav{display: flex;margin-top: 0.4rem;}
	nav>span{
		display: block;
		width: 33.3%;
		text-align: center;
		line-height: 40px;
	}
	nav>.page{
		color:red;
		border-bottom: 1px solid red;
		
	}
	
	
</style>