'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
    $scope.global = Global;

    $http.get('/users/' + $scope.global.user.email).success(function(data){
        $scope.user = data;
    });

    $scope.menu = [{
        'title': 'Purchase',
        'link': 'purchase'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];
    
    $scope.isCollapsed = false;
}]);