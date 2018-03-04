angular.module('app').controller('meCtrl',['$state','$cookies','$http','$scope',
	function($state,$cookies,$http,$scope){
		if ($cookies.get('name')){
			//登录状态  取出用户的信息
			$scope.name = $cookies.get('name');
			$scope.image = $cookies.get('image');
		}

		//退出登录
		$scope.logout = function(){
			if (confirm('确定退出吗？')) {
				$cookies.remove('id');
				$cookies.remove('name');
				$cookies.remove('image');
				$state.go('main');
			}
		}
	}]);
