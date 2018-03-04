angular.module('app').filter('positionfilter',function(){
	//list需要过滤的数据   obj筛选的条件
	return function(list,obj){
		//过滤后符合条件的数组 先置为空数组
		var result = [];
		angular.forEach(list,function(item){
			//判断是否符合条件的标准
			var isEqual = true;
			for(var e in obj){
				if (item[e]!==obj[e]){
					//不符合条件
					isEqual = false; 
				}
			}
			if (isEqual) {
				result.push(item);//符合条件的职位
			}
		});
		return result;
	};
});