angular.module('app').controller('loginCtrl',
['$state','$http','$cookies','$scope',
function($state,$http,$cookies,$scope){
		$scope.submit = function(){
			$http.get('data/login.json',$scope.user).then(function(resp){
					var data = resp.data;
					$cookies.put('id',data.id);//储存服务器返回的用户信息
					$cookies.put('name',data.name);
					$cookies.put('image',data.image);
					//跳转到首页
					$state.go('main');
			});
		}

}])