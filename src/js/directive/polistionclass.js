angular.module('app').directive('appPositionClass',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionClass.html',
		scope:{
			com:'='
		},
		//执行的js代码
		link:function($scope){
			//点击执行时  显示当前索引的分类
			$scope.showPositionList = function(idx){
				// $scope.positionList当前分类的职位列表
					$scope.positionList = $scope.com.positionClass[idx].positionList;
					//当前显示的高亮的按钮
					$scope.isActive = idx;
			}
			//监听有没有获取到com数据  如果获取到  默认显示索引为0的内容
			$scope.$watch('com',function(newVal){
				if(newVal){
					$scope.showPositionList(0);
				};
		});
		}
	};
}]);