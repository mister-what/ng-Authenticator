'use strict';

/**
 * @ngdoc overview
 * @name gauthApp
 * @description
 * # gauthApp
 *
 * Main module of the application.
 */
angular
    .module('gauthApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('blue-grey').dark();
        ;
    }).controller('appController', function ($scope, $rootScope) {
        $scope.search_string = "";
        $scope.currentPage = "Angular Auth Main";
        $rootScope.currentPage = $scope.currentPage;
        $rootScope.search_string = $scope.search_string;
    });
