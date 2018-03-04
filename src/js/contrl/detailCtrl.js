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