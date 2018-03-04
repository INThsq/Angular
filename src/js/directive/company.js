angular.module('app').directive('appCompany',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/company.html',
		scope:{
			company :'=',//接受变量
		}
	};
}]);