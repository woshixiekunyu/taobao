//引入Vue
import Vue from 'vue';

//引入jQ
import $ from 'jquery';
window.$=$;
//引入路由
import VueRouter from 'vue-router';

//import Vuex from 'vuex';
//Vue.use(Vuex);
//使用路由
Vue.use(VueRouter);

//引入mui.css样式
require('./dist/css/swiper.css');
require('./dist/css/base.css')


//引入服务器模块

//var http = require('http');
//import http from 'http'

//引入mysql
//var mysql = require('mysql')
//import mysql from 'mysql';

//引入fs
//import fs from 'fs';
//var fs = require('fs')



//创建连接数据库
//console.log(mysql)
//var connection = mysql.createConnection({
//	
//})




//引入vue模块
var main = require('./component/main.vue');
var index = require('./component/index.vue');
var goodsSearch = require('./component/goodsSearch.vue');
var searchAll = require('./component/searchAll.vue');
var searchTianmao = require('./component/searchTianmao.vue');
var searchShop = require('./component/searchShop.vue');
var liuyan = require('./component/liuyan.vue');
var xiangce = require('./component/xiangce.vue');
var my = require('./component/my.vue');
var more = require('./component/more.vue');

//var store = new.Vuex.Store({
//	state:{
//		idx:''
//	},
//	mutations:{
//		setIdx:function(state,a){
//			state.idx = a;
//		}
//	},
//	getters:{
//		getIdx:function(state){
//			return state.idx
//		}
//	}
//})
var router = new VueRouter({
	routes:[{
		path:'/main',
		component:main,
		children:[{
			path:'index',
			component:index
		},{
			path:'liuyan',
			component:liuyan,
			
		},{
			path:'xiangce',
			component:xiangce
		},{
			path:'my',
			component:my
		},{
			path:'more',
			component:more
		}]
	},{
		path:'/goodsSearch',
		component:goodsSearch,
		children:[{
			path:'searchAll',
			component:searchAll
		},{
			path:'searchTianmao',
			component:searchTianmao
		},{
			path:'searchShop',
			component:searchShop
		},{
			path:'/',
			redirect:'/goodsSearch/searchAll'
		},]
	},{
		path:'/',
		redirect:'/main/index'
	}]
})
new Vue({
	el:'#taobao',
	
	template:`<div><router-view></router-view></div>`,
	
	mounted:function(){
	
//		window.location.href="#/main/index"
	},
	//需要注入
	router,
//	store
})
