'use strict';

/**
 * @ngdoc function
 * @name gauthApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gauthApp
 */
angular.module('gauthApp')
    .controller('AddCtrl', function ($scope, $location, OtpCalculator) {

        $scope.addFunction = function () {
            if ($scope.newAccountForm.$valid) {
                OtpCalculator.addAccount($scope.name, $scope.secret.toUpperCase());
                $scope.name = "";
                $scope.secret = "";
                $scope.newAccountForm.$setPristine();
                $location.path('/');
            }
        };
        $scope.newAccountForm = {};
        $scope.name = "";
        $scope.secret = "";
    });







