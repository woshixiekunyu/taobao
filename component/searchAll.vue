<template>
	<div>
		<main>
			<div class="historySearch" v-if="isdelete">
				<h6>历史搜索</h6>
				<i class="icon icon-delete" @click="deletes()"></i>
				<div class="history">
					<ul>
						
					</ul>
				</div>
			</div>
			<div class="searchFind">
				<h6>搜索发现</h6>
				<i class="icon icon-look" @click="look()"></i>
				<div class="history">
					<ul>
						
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				isdelete:true
			}
		},
		mounted(){
			console.log($('.historySearch .history ul').children('li').length)
			if($('.historySearch .history ul').children('li').length == 0){
				this.isdelete = false;
			}
		}
	}
</script>

<style scoped>
	main{
		padding: 10px;
	}
main .icon {
	display: inline-block;
	width: 16px;
	height: 16px;
	float: right;
}
main h6{
	line-height: 30px;
	float: left;
}
main>div{
	overflow: hidden;
}
.icon-delete{
	background: url('image/icon/icon-delete.png') no-repeat;
	margin-top: 0.06rem;
}
.icon-look{
	background: url('image/icon/icon-look.png') no-repeat;
	margin-top: 0.06rem;
}
</style>