angular.module('app').directive('appHeader',
	['$cookies',function($cookies){
	return{
		restrict:'A',//属性方式调用
		replace:true,//替换原标签
		templateUrl:'view/template/header.html',
		scope:{},
		link:function($scope){
			$scope.name = $cookies.get('name');
			$scope.image = $cookies.get('image');
		}
	}
}]
)