angular.module('app').controller('postCtrl',['$scope','$http',
	function($scope,$http){
	$http.get('/data/myPost.json').then(function(resp){
		$scope.list = resp.data; //返回的职位列表	
	});

	// 添加tab标签的数据
	$scope.curtab = 0;
	$scope.tabtext=[
		{id:0,txt:'全部'},
		{id:1,txt:'面试邀请'},
		{id:2,txt:'不合适'},	
	];
	//点击tab的执行函数
	$scope.tiaojianobj={};
	$scope.clicktab = function(index){
		//点击全部{}
		if (index==0) {
			//操作样式的数据
			$scope.curtab=0;
			delete $scope.tiaojianobj.state;
		}
		//点击面试邀请 (state=1)
		if (index==1) {
			$scope.curtab=1;
			$scope.tiaojianobj.state="1";
		}
		//点击不合适
		if (index==2) {
			$scope.curtab=2;
			$scope.tiaojianobj.state="-1";
		}
		console.log($scope.tiaojianobj);

	} 


}]);