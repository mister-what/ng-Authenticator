'use strict';

/**
 * @ngdoc function
 * @name gauthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gauthApp
 */
angular.module('gauthApp')
    .controller('MainCtrl', function ($scope, OtpCalculator, $interval, $route, $routeParams, $location, $document, $http, $rootScope) {

        $scope.search = $rootScope.search;
        $rootScope.currentPage = "Angular Auth Main";
        $scope.params = $routeParams;
        $scope.pattern = /(%0A|%20)/g;
        $scope.colors = {};
        //var endpoint = new api();
        var time = 30;
        var date = new Date();
        $scope.codes = [];
        $scope.counter = time - (Math.floor(date.getTime() / 1000) % time);
        var apiRequestFunction = function () {
            OtpCalculator.getAllPasswords(function (result) {
                $scope.codes = [];
                for(var x in result){
                    var code = {name: x, oneTimeKey: result[x]};
                    if ($scope.colors[code.name] == undefined) {
                        $scope.colors[code.name] = {
                            r: Math.floor(Math.random() * 256),
                            b: Math.floor(Math.random() * 256),
                            g: Math.floor(Math.random() * 256)
                        };
                    }
                    code.colorCss = 'rgb(' + $scope.colors[code.name].r + ',' + $scope.colors[code.name].g + ',' + $scope.colors[code.name].b + ')';
                    $scope.codes.push(code);
                }
            });
        };
        $scope.deleteAccount = function (name) {
            //var name = $scope.params.name;
            OtpCalculator.deleteAccount(name, function (err) {
                if(!err){
                    $location.path('/');
                    apiRequestFunction();
                }
            });
        };
        //var t = date.getTime();


        var searchFunction = function () {
            var name = $scope.codes[$scope.params.number].name.replace(/%0A/g, '<br>');
            name = name.replace(/%20/g, ' ');
            $scope.account = {
                api_name: $scope.codes[$scope.params.number].name,
                name: name,
                key: $scope.codes[$scope.params.number].oneTimeKey
            };

        };

        apiRequestFunction();

        //$interval(apiRequestFunction(), 10000);
        $interval(function () {
            //_t = new Date().getTime();
            date = new Date();
            $scope.counter = time - (Math.floor(date.getTime() / 1000) % time);
            //console.log($scope.counter);
            $scope.timer = Math.floor((1 / 3) * date.getTime() / 50) % 100;
            if ($scope.counter == 30) {
                apiRequestFunction();
            }
        }, 50);
    });
