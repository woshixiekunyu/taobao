<template>
	<div>
		
		<header>
			<h2>留言区</h2>
		</header>
		<aside  @click="toWrite()">
			<i class="icon icon-write"></i>
		</aside>
		<div class="toWrite" v-show="istoWrite">
			<input type="text" placeholder="标题" v-model="titleVal"/>
			<textarea name="textarea" id="textarea" v-model="textVal" placeholder="内容"></textarea>
			<span @click="sendText()">发表</span>
			<span @click="back()">取消</span>
		</div>
		<nav>
			<h3>最新动态:</h3>
			<div><span></span></div>
		</nav>
		<main>
			<ul>
				<!--<li>
					<h3>{{title}}</h3>
					<p>{{content}}</p>
				</li>-->
			</ul>
		</main>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				speed:5,
				textVal:'',
				titleVal:'',
				title:'',
				content:'',
				istoWrite:false,
			}
		},
		methods:{
			toWrite(){

				this.istoWrite = true;
			},
			sendText(){
				this.title = this.titleVal;
				this.content = this.textVal;
				console.log('标题:'+this.title);
				console.log('内容:'+this.content);
				$.ajax({
					url:'http://1.xiekunyu.applinzi.com/mainArea/link/php/writeinliuyan.php',
					type:'POST',
					data:{
						'title':this.title,
						'content':this.content
					},
					success:function(){
						location.reload()
					}
				})
				this.titleVal = '';
				this.textVal = '';
				this.istoWrite = false;
			},
			back(){
				this.istoWrite = false;
			}
			
		},
		mounted(){
			var self = this;
			var $left = parseInt($('nav span').css('left'));
//			console.log($left)
			var $left;
			setInterval(function(){
//				 $left= parseInt($('nav>div>span').css('left'));
//				console.log($left-self.speed)
				self.speed-=5;
//				$left = $left - self.speed
//				console.log($('nav>div>span').innerWidth())
				if(self.speed<=-$('nav>div>span').innerWidth()){
					self.speed = 0;
				}
				$('nav span').animate({'left':self.speed})
			},0)
			
		
			//编写页面
			//发送ajax获取信息
			$.ajax({
				url:'http://1.xiekunyu.applinzi.com/mainArea/link/php/getinliuyan.php',
				type:'POST',
				dataType:'json',
				success:function(data){
					console.log(data)
					data.map(function(item){
						console.log(item.title,item.content)
						return $('<li/>').html(`
									<h3>${item.title}</h3>
									<p>${item.content}</p>
								`).addClass('createLi').appendTo($('main>ul'))
					}).join('')
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
		color: #fff;
		
		z-index: 10;
	}
	header h2{
		line-height: 0.44rem;
		text-align: center;
	}
	aside i{
		display: block;
		width: 32px;
		height: 32px;
		background: url('image/icon/icon-write.png') no-repeat;
		position: fixed;
		bottom: 0.6rem;
		right: 0.1rem;
		opacity: 0.7;
		background-color: #fff;
	}
	.toWrite{
		width: 100%;
		height: 100%;
		background-color: #999;
		opacity: 0.9;
		position: fixed;
		top: 0;
		z-index: 100;
		padding-left: 0.3rem;
		padding-top: 0.3rem;
	}
	.toWrite>input{
		opacity: 1;
	}
	.toWrite>textarea{
		min-width: 80%;
		min-height: 1.5rem;
		margin-top: 0.05rem;
		display: block;
		opacity: 1;
	}
	.toWrite>span{
		width: 0.4rem;
		height: 0.2rem;
		display: inline-block;
		background-color: #007AFF;
		border: 1px solid #FF4500;
		text-align: center;
		line-height: 0.2rem;
		margin-right:5px;
		color: #fff;
		opacity: 1;
	}
	nav{
		display: flex;
		background-color: #fff;
		margin-top: 0.44rem;
		height: 0.5rem;
		border-bottom: 1px solid #ddd;
		line-height: 0.5rem;
		padding-left: 10px;
		background-color: skyblue
	}
	nav>h3{
		width: 25%;
		color:#FFFF00;
		text-shadow: 0 0 5px #FFFF00;
	}
	nav>div{
		width: 80%;
		position: relative;
		overflow: hidden;
	}
	nav>div>span{
		position: absolute;
		left: 0px;
		
	}
	
	main>ul>li>h3{
		line-height: 24px;
		font-size: 16px;
	}
	main>ul>li>p{
		line-height: 16px;
		font-size: 12px;
		text-indent: 0.24rem;
	}
</style>