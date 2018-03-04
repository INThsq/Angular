angular.module('app').directive('appFooter',function(){
	return{
		restrict:'A',//属性方式调用
		replace:true,//替换原标签
		templateUrl:'view/template/footer.html'
	}
})