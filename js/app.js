var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);
