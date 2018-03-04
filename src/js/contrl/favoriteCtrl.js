angular.module('app').controller('favoriteCtrl',['$http','$scope',
	function($http,$scope){
		$http.get('/data/myFavorite.json').then(function(resp){
			$scope.list = resp.data;//返回的职位列表
		})
		console.log($scope);
}])