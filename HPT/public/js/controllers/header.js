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

		$scope.menu = [
			{
				'title': 'Purchase',
				'link': 'purchase'
			},
			{
				'title': 'Sell',
				'link': 'sell'
			}
		];

		$scope.isCollapsed = false;
	}]
);