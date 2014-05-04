'use strict';

angular.module('mean.system').controller('BrokersController',
    ['$scope', '$http', '$location', 'Global', 
	function ($scope, $http, $location, Global) {
        $scope.global = Global;
        var current_user = $scope.global.user.email;
        $scope.type = 'allBroker';
	
		$scope.startBroker = function () {
			
		}

    }]);
