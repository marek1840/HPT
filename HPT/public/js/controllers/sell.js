'use strict';

angular.module('mean.system').controller('SellController',
    ['$scope', '$http', '$location', 'Global', function ($scope, $http, $location, Global) {
        $scope.global = Global;

        $scope.industryPrefix = '';

        var current_user = $scope.global.user.email;
        $http.get('/users/'+current_user+'/stock').success(function (ownedStock) {
            $http.get('/companies.json').success(function (companies) {
                var ownedStockDict = {};
                ownedStock.ownedStock.forEach(function(entry){
                    ownedStockDict[entry.company] = entry.amount;
                });
                ownedStock = ownedStockDict;

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

                $scope.allCompanies = companies;

                $scope.ownedCompanies = companies.filter(function (company) {
                    company.ownedStock = ownedStock[company.name];
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
                    return function (income) {
                        $http.post('/sell', {
                            email: Global.user.email,
                            company: companyName,
                            amount: amount,
                            cost: income
                        }).then(function () {
                            $scope.resp = amount;
                            $scope.sold[companyName] = amount;
                            $scope.updateOwnedStock();
                        }, function(){
                            $scope.sold[companyName] = -30;
                        });
                    };
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

        $scope.updateOwnedStock = function (){
            $http.get('/users/'+current_user+'/stock').success(function (ownedStock) {
                var ownedStockDict = {};
                ownedStock.ownedStock.forEach(function(entry){
                    ownedStockDict[entry.company] = entry.amount;
                });
                $scope.allCompanies.forEach(function(company){
                    company.ownedStock = ownedStockDict[company.name]
                });
                $scope.$apply();
            });
        }

        $scope.updateStockPrice = function (){
            $http.get('/companies.json').success(function (data){
                var companiesDict = {};
                data.forEach(function(entry){
                    companiesDict[entry.name] = entry;
                });
                $scope.allCompanies.forEach(function(entry){
                    entry.stockPrice = companiesDict[entry.name].stockPrice;
                });
                $scope.$apply();
            });
        }

        setInterval($scope.updateStockPrice,10000);
    }]);
