'use strict';

angular.module('mean.system').controller('PurchaseController', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
	$scope.global = Global;

	$http.get("/companies.json").success(function(data){

		$scope.industries = data.reduce(function(acc, company){
		    acc[company.industry] = true;
		    return acc;
		}, {});
	
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

}]);