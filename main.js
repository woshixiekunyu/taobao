//引入Vue
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
require('./mainArea/mui/css/mui.css');


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
	router
})
