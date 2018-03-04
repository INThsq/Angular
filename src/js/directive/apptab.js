angular.module('app').directive('appTab', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/apptab.html', 
    scope:{
    	list:'=',
    },
    link:function($scope){
    	//默认选中状态的标签
    	$scope.selectId=$scope.list[0].id;//'city'
    	//点击筛选条件执行的函数
    	$scope.click=function(item,index){
    		$scope.$parent.listshow=1;   //让弹出层显示  
            console.log(item.id);
            //item.id 'city'  'salary' 'scale';
            //找到点击tab对应的数据  赋值给tablist显示列表
    		$scope.$parent.tablist=$scope.$parent[item.id];  
    		$scope.$parent.tabindex=index;
    		//切换tab的选中
    		$scope.selectId=$scope.list[index].id;
    	}
    }
  };
}]);