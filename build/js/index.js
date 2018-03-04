angular.module('app',['ui.router','validation','ngCookies'])

angular.module('app')  //模块名  注入ui.router中的两个服务
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{    //路由名字
		url:'/main',                 //地址栏中的地址
		templateUrl:'view/main.html',   //视图
		controller:'mainCtrl'         //指定的控制器 
	}).state('detail',{    //路由名字
		url:'/detail/:id', //地址栏中的地址
		templateUrl:'view/detail.html',  //视图
		controller:'detailCtrl'   //指定的控制器
	}).state('company',{  
		url:'/company/:cid', 
		templateUrl:'view/company.html',
		controller:'companyCtrl'
	}).state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl'
	}).state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl'
	}).state('me',{
		url:'/me',
		templateUrl:'view/me.html',
		controller:'meCtrl'
	}).state('post',{
		url:'/post',
		templateUrl:'view/post.html',
		controller:'postCtrl'
	}).state('favorite',{
		url:'/favorite',
		templateUrl:'view/favorite.html',
		controller:'favoriteCtrl'
	});
	$urlRouterProvider.otherwise('/main');   //匹配不成功 默认跳转
}])
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
angular.module('app').directive('appFooter',function(){
	return{
		restrict:'A',//属性方式调用
		replace:true,//替换原标签
		templateUrl:'view/template/footer.html'
	}
})
angular.module('app').directive('appHeadBar',[function(){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/headBar.html',
		scope:{
			text:'@'
		},
		link:function($scope){
			$scope.back = function(){
				window.history.back();
			};
		}
	};
}]);
angular.module('app').directive('appHeader',
	['$cookies',function($cookies){
	return{
		restrict:'A',//属性方式调用
		replace:true,//替换原标签
		templateUrl:'view/template/header.html',
		scope:{},
		link:function($scope){
			$scope.name = $cookies.get('name');
			$scope.image = $cookies.get('image');
		}
	}
}]
)
angular.module('app').directive('appPositionList',['$http',function($http){
	return{
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionList.html',
		scope:{
				data:'=',//= 接收对象 变量
				tiaojianobj:'='
		},
		link:function($scope){

		}
	};
}]);
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
angular.module('app').controller('companyCtrl',
	['$scope','$state','$http',function($scope,$state,$http){
			$http.get('/data/company.json?cid='+$state.params.cid).then(function(resp){
					$scope.company = resp.data;
					//公司详情的信息
			});
}])
angular.module('app').controller('detailCtrl'
	,['$scope','$state','$http','$cookies',function($scope,$state,$http,$cookies){
			$http.get('/data/position.json?pid='+$state.params.id).then(function(resp){
					$scope.position = resp.data; //返回的职位详情信息
					//用返回的职位详情中的公司id再请求公司详情的信息
					$http.get('/data/company.json?cid='+resp.data.companyId).then(function(resp){
							$scope.company = resp.data;
							// console.log(resp.data);
					});
				});
			//用户是否登陆的判断标准
		$scope.name = $cookies.get('name');
		// console.log($scope.name);
		$scope.sced = false;
		//用户点击收藏的执行逻辑
		$scope.collect=function(){
   		 //发送ajax请求到后台
		$http.get('/data/favorite.json?pid'+$state.params.id+'uid='+$cookies.get('id'))
			.then(function(resp){
				console.log(resp);
				//如果返回1
					if (resp.data.state==1){
						alert('收藏成功！');
						$scope.sced = true;
					}else{
						alert('收藏失败!');
						$scope.sced = false;
					}
			})
		}
		
		$scope.sendtxt = "投递简历";
		$scope.sendj1=function(){
			$http.get('/data/handle.json?pid'+$state.params.id+'uid='+$cookies.get('id'))
			.then(function(resp){
				console.log(resp);
				if (resp.data.state==1) {
					alert('投递成功!');
					$scope.sendtxt = "已投递";
				}else{
					alert('投递失败!');
					$scope.sendtxt = "投递简历";
				}

			})
		}
	
	}])
angular.module('app').controller('favoriteCtrl',['$http','$scope',
	function($http,$scope){
		$http.get('/data/myFavorite.json').then(function(resp){
			$scope.list = resp.data;//返回的职位列表
		})
		console.log($scope);
}])
angular.module('app').controller('loginCtrl',
['$state','$http','$cookies','$scope',
function($state,$http,$cookies,$scope){
		$scope.submit = function(){
			$http.get('data/login.json',$scope.user).then(function(resp){
					var data = resp.data;
					$cookies.put('id',data.id);//储存服务器返回的用户信息
					$cookies.put('name',data.name);
					$cookies.put('image',data.image);
					//跳转到首页
					$state.go('main');
			});
		}

}])
angular.module('app').controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/positionList.json').then(function(resp){
		$scope.list = resp.data;//返回的职位列表
	});
}])
angular.module('app').controller('meCtrl',['$state','$cookies','$http','$scope',
	function($state,$cookies,$http,$scope){
		if ($cookies.get('name')){
			//登录状态  取出用户的信息
			$scope.name = $cookies.get('name');
			$scope.image = $cookies.get('image');
		}

		//退出登录
		$scope.logout = function(){
			if (confirm('确定退出吗？')) {
				$cookies.remove('id');
				$cookies.remove('name');
				$cookies.remove('image');
				$state.go('main');
			}
		}
	}]);

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
angular.module('app').controller('searchCtrl',['$scope','$http',
	function($scope,$http){
		//tab标签声明
		$scope.tabList = [{
			id:'city',
			name:'城市'
		},{
			id:'salary',
			name:'薪水'
		},{
			id:'scale',
			name:'公司规模'
		}];
		
		//条件列表默认隐藏
		$scope.listshow=0;
		//初始化
		$scope.tiaojianobj = {};
		//请求职位列表
		$http.get('/data/positionList.json').then(function(jesp){
			$scope.list = jesp.data;
		})
		//请求城市列表
		$http.get('/data/city.json').then(function(jesp){
			$scope.city = jesp.data;
		})
		//请求薪水列表
		$http.get('/data/salary.json').then(function(jesp){
			$scope.salary = jesp.data;
		})
		//请求公司规模的列表
		$http.get('/data/scale.json').then(function(jesp){
			$scope.scale = jesp.data;
		})

}])
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