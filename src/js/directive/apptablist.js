angular.module('app').directive('appTabList', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/tablist.html', 
    scope:{
    	tablist:'=',
    },
    link:function($scope){
        //点击关闭 隐藏条件列表
    	$scope.close=function(){
            //控制器中的listshow
            $scope.$parent.listshow=0; 
        }
        //点击列表内容 切换tab标题
        $scope.changetab=function(item){
           $scope.$parent.tabList[$scope.$parent.tabindex].name
           =item.name;
           $scope.$parent.listshow=0;



       // 操作控制器中的tiaojianobj对象 创造筛选的条件
       //如果点击选中的是城市
          if ($scope.$parent.tabindex==0){
            if (item.id!='') {
              // {cityId:c1}
                $scope.$parent.tiaojianobj.cityId = item.id;
            }else{
              // cityId 属性被删除
                delete $scope.$parent.tiaojianobj.cityId;
            }
          }
          //点击的是薪水
          if ($scope.$parent.tabindex==1) {
              if (item.id!=='') {
                  $scope.$parent.tiaojianobj.salaryId = item.id;
                }else{
                  delete $scope.$parent.tiaojianobj.salaryId;
                }

          }
          //点击的是公司规模
          if ($scope.$parent.tabindex==2) {
            if (item.id!=='') {
              $scope.$parent.tiaojianobj.scaleId = item.id;
            }else{
              delete $scope.$parent.tiaojianobj.scaleId;
            }
          }
       



        }
    }
  };
}]);