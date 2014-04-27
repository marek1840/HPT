'use strict';

angular.module('mean.system').controller('PurchaseController',
    ['$scope', '$http', '$location', 'Global', function ($scope, $http, $location, Global) {
        $scope.global = Global;

        var res = $http.get('/companies.json');
        $scope.industryPrefix = '';
        $scope.companyPrefix = '';

        res.success(function (data) {


            $scope.industries = data.reduce(function (acc, company) {
                acc[company.industry] = true;
                return acc;
            }, {});

            $scope.ind = function () {
                var keys = [];
                for (var k in $scope.industries)
                    keys.push(k);
                return keys;
            };
            $scope.companies = function () {
                return data.filter(function (company) {
                    
                    return $scope.industries[company.industry];
                });
            };
        });

        $scope.purchased = {};

        $scope.purchase = function (companyName) {
            return function (amount) {
                if (amount > 0) {
                    return function (cost) {
                        $http.post('/purchase', {
                            email: Global.user.email,
                            company: companyName,
                            amount: amount,
                            cost: cost
                        }).then(function () {
                            $scope.resp = amount;
                            $scope.purchased[companyName] = amount;
                        }, function () {
                            $scope.purchased[companyName] = -30;
                        });
                    };
                }
            };
        };

        $scope.purchased = function (companyName) {
            var amount = $scope.purchased[companyName];
            if (amount > 0) {
                return amount;
            }
        };

        $scope.showPurchased = function (companyName) {
            return $scope.purchased[companyName];
        };

    }]);