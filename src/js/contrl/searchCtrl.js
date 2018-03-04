angular.module('app').controller('searchCtrl',['$scope','$http',
	function($scope,$http){
		//tab标签声明
		$scope.tabList = [{
			id:'city',
			name:'城市'
		},{
			id:'salary',
			name:'薪水'
		},{
			id:'scale',
			name:'公司规模'
		}];
		
		//条件列表默认隐藏
		$scope.listshow=0;
		//初始化
		$scope.tiaojianobj = {};
		//请求职位列表
		$http.get('/data/positionList.json').then(function(jesp){
			$scope.list = jesp.data;
		})
		//请求城市列表
		$http.get('/data/city.json').then(function(jesp){
			$scope.city = jesp.data;
		})
		//请求薪水列表
		$http.get('/data/salary.json').then(function(jesp){
			$scope.salary = jesp.data;
		})
		//请求公司规模的列表
		$http.get('/data/scale.json').then(function(jesp){
			$scope.scale = jesp.data;
		})

}])