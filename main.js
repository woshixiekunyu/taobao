//引入Vue
import Vue from 'vue';

//引入jQ
import $ from 'jquery';
window.$=$;
//引入路由
import VueRouter from 'vue-router';

//使用路由
Vue.use(VueRouter);

//引入mui.css样式
//require('./mainArea/mui/css/mui.css');
require('./dist/css/base.css')
//引入vue模块
var main = require('./component/main.vue');
var index = require('./component/index.vue');
var goodsSearch = require('./component/goodsSearch.vue');

var router = new VueRouter({
	routes:[{
		path:'/main',
		component:main,
		children:[{
			path:'index',
			component:index
		}]
	},{
		path:'/goodsSearch',
		component:goodsSearch,
		
	}]
})
new Vue({
	el:'#taobao',
	
	template:`<div><router-view></router-view></div>`,
	
	mounted:function(){
	
		window.location.href="/#/main/index"
	},
	//需要注入
	router
})
