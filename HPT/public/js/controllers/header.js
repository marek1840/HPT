'use strict';

angular.module('mean.system').controller('HeaderController', 
	['$scope', '$http', 'Global',
	function ($scope, $http, Global) {
		$scope.global = Global;

		if ($scope.global.authenticated) {
			$http.get('/users/' + $scope.global.user.email).success(
				function (data) {
					$scope.user = data;
				});
		}

		$scope.global.updateCapital = function () {
			if ($scope.global.authenticated) {
				$http.get('/users/' + $scope.global.user.email).success(
					function (data) {
						$scope.user.capital = data.capital;
					});
			}
		};

		$scope.menu = [
			{
				'title': 'Purchase',
				'link': 'purchase'
			},
			{
				'title': 'Sell',
				'link': 'sell'
			},
			{	
				'title': 'Brokers',
				'link' : 'brokers'
			}
		];

		$scope.isCollapsed = false;
	}]
);
