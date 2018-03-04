angular.module('app').directive('appPositionList',['$http',function($http){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionList.html',
		scope:{
				data:'=',//= 接收对象 变量
				tiaojianobj:'='
		},
		link:function($scope){

		}
	};
}]);