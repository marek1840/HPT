'use strict';

angular.module('mean.system').controller('PurchaseController', ['$scope', '$http', '$location', 'Global', function ($scope, $http, $location, Global) {
	$scope.global = Global;

	$scope.industryPrefix = ''

	$scope.startsWithPrefix = function(industry){
		return true;
	}

	$http.get("/companies.json").success(function(data){

		$scope.industries = data.reduce(function(acc, company){
			    acc[company.industry] = true;
		    return acc;
		}, {});

		$scope.ind = function(){
			var keys = []
			for(var k in $scope.industries) 
				keys.push(k)
			return keys
		}

    	$scope.companies = function() {
	  		return data.filter(function(company){
	  	 		return $scope.industries[company.industry];
			});
    	};
	});

	// var companies = [{
	// 	name: 'comp1',
	// 	industry: 'ind1',
	// 	stockPrice: 31,
	// 	difference: 12
	// },{
	// 	name: 'comp2',
	// 	industry: 'ind1',
	// 	stockPrice: 41,
	// 	difference: 2
	// },{
	// 	name: 'comp3',
	// 	industry: 'ind2',
	// 	stockPrice: 54,
	// 	difference: 10
	// },{
	// 	name: 'comp4',
	// 	industry: 'ind34',
	// 	stockPrice: 31,
	// 	difference: -44
	// }];

	var form = {
		amount: 0
	};

	$scope.purchased = {
		comp1: 10
	}

	$scope.purchase = function(companyName){
		return function(amount){
			if(amount > 0){
				$http.post("/purchase", {
					company: companyName,
					amount: amount
				}).success(function(data){
					$scope.purchased[companyName] = amount;
				})
			}
		}
	}

	$scope.purchased = function(companyName){
		var amount = $scope.purchased[companyName];
		if (amount > 0){
			return amount;
		}else{
			return Nothing
		}
	}

	$scope.showPurchased = function(companyName){
		return $scope.purchased[companyName] > 0;
	}



}]);