angular.module('app').filter('positionfilter',function(){
	// list需要过滤的数据
	return function(list,obj){
		var result = []; //过滤后符合条件的数据
		angular.forEach(list,function(item){
			var isEqul = true; //是否符合条件的判断标准
			for(var e in obj){
				if (item[e]!==obj[e]) {
					isEqul = false;
				}
			}
			if (isEqul) {
				result.push(item);
			}
		});
		return result;
	};
});