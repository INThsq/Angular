// config一个常量注入配置
angular.module('app').config(['$validationProvider',
	function($validationProvider){
		var expression = {
			  phone: /^1[3|4|5|7|8]\d{9}$/,  
			  password:function(value){
			  	var str = value +'';//转换成字符串
			  	return str.length > 5;
			  },
			  required:function(value){
			  	return value?true:false;
			  }
		};
		//表单验证提示信息
		var defaultMsg = {
			phone:{
				success:'',
				error:'必须是11位手机号'
			},
			password:{
				success:'',
				error:'长度至少6位'
			},
			required:{
				success:'',
				error:'不能为空'
			}
		}
		 $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);  
	}]);