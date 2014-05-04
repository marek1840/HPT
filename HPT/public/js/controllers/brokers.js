'use strict';

//import broker

angular.module('mean.system').controller('BrokersController',
    ['$scope', '$http', '$location', 'Global', 
	function ($scope, $http, $location, Global) {
        $scope.global = Global;
        var current_user = $scope.global.user.email;
        $scope.type = 'allBroker';
        $scope.list= [];
        $scope.failure = 
	
		$scope.startBroker = function () {
			var amount = $scope.amount;
			var time = $scope.time;
			var profit = $scope.profit;
			if(amount != null && time != null && profit != null) {
				if ($scope.type == 'allBroker') {
					var broker = new Broker(current_user, amount, strategies.buyAll, time * 1000, profit);
				} else {
					var broker = new Broker(current_user, amount, strategies.buyMostStocks, time * 1000, profit);
				}
				broker.start();
				setInterval(broker.getData, 3000);
			}
		}

    }]);
