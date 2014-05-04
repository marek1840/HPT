'use strict';

//import broker

angular.module('mean.system').controller('BrokersController',
    ['$scope', '$http', '$location', 'Global',
        function ($scope, $http, $location, Global) {
            $scope.global = Global;
            var current_user = $scope.global.user.email;
            $scope.type = 'all';

            $scope.hire = function (type, amount, time, profit) {
                $http.post('brokers', {
                    email: Global.user.email,
                    type: type,
                    amount: amount,
                    time: time,
                    profit: profit
                })
            };

        }]);
