angular.module('app').controller('companyCtrl',
	['$scope','$state','$http',function($scope,$state,$http){
			$http.get('/data/company.json?cid='+$state.params.cid).then(function(resp){
					$scope.company = resp.data;
					//公司详情的信息
			});
}])