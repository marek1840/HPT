'use strict';

angular.module('mean.system').controller('SellController',
    ['$scope', '$http', '$location', 'Global', function ($scope, $http, $location, Global) {
        $scope.global = Global;

        $scope.industryPrefix = '';

        var current_user = $scope.global.user.email;
        $http.get('/users/'+current_user+'/stock').success(function (ownedStock) {
            $http.get('/companies.json').success(function (companies) {
                $scope.industries = companies.reduce(function (acc, company) {
                    if (company.name in ownedStock)
                        acc[company.industry] = true;
                    return acc;
                }, {});

                $scope.ind = function () {
                    var keys = [];
                    for (var k in $scope.industries)
                        keys.push(k);
                    return keys;
                };

                $scope.ownedCompanies = companies.filter(function (company) {
                    company.ownedStock = ownedStock[company.name]
                    return ownedStock[company.name] > 0;
                });

                $scope.companies = function () {
                    return $scope.ownedCompanies.filter(function (company) {
                        return $scope.industries[company.industry];
                    });
                };
            });
        });


        $scope.sold = {};

        $scope.sell = function (companyIndex) {
            var companyName = $scope.ownedCompanies[companyIndex].name;
            var ownedStock = $scope.ownedCompanies[companyIndex].ownedStock;
            return function (amount) {
                if (amount > 0 && amount <= ownedStock) {
                    return function (cost) {
                        $http.post('/sell', {
                            email: Global.user.email,
                            company: companyName,
                            amount: amount,
                            cost: cost
                        }).success(function (data) {
                            $scope.sold[companyName] = amount;
                        });
                    }
                }
            };
        };

        $scope.sold = function (companyName) {
            var amount = $scope.sold[companyName];
            if (amount > 0) {
                return amount;
            }
        };

        $scope.showSold = function (companyName) {
            return $scope.sold[companyName] > 0;
        };

    }]);