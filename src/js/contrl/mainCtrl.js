angular.module('app').controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/positionList.json').then(function(resp){
		$scope.list = resp.data;//返回的职位列表
	});
}])