//引入Vue
import Vue from 'vue';

//引入路由
import VueRouter from 'vue-router';

//使用路由
Vue.use(VueRouter);

//引入mui.css样式
require('./mainArea/mui/css/mui.css');

//引入vue模块
var index = require('./component/index.vue');

var router = new VueRouter({
	routes:[{
		path:'/index',
		component:index
	}]
})
new Vue({
	el:'#taobao',
	
	template:`<div><router-view></router-view></div>`,
	//需要注入
	router
})
