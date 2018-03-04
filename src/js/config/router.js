
angular.module('app')  //模块名  注入ui.router中的两个服务
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{    //路由名字
		url:'/main',                 //地址栏中的地址
		templateUrl:'view/main.html',   //视图
		controller:'mainCtrl'         //指定的控制器 
	}).state('detail',{    //路由名字
		url:'/detail/:id', //地址栏中的地址
		templateUrl:'view/detail.html',  //视图
		controller:'detailCtrl'   //指定的控制器
	}).state('company',{  
		url:'/company/:cid', 
		templateUrl:'view/company.html',
		controller:'companyCtrl'
	}).state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl'
	}).state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl'
	}).state('me',{
		url:'/me',
		templateUrl:'view/me.html',
		controller:'meCtrl'
	}).state('post',{
		url:'/post',
		templateUrl:'view/post.html',
		controller:'postCtrl'
	}).state('favorite',{
		url:'/favorite',
		templateUrl:'view/favorite.html',
		controller:'favoriteCtrl'
	});
	$urlRouterProvider.otherwise('/main');   //匹配不成功 默认跳转
}])