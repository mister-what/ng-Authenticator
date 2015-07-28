angular.module('gauthApp')
    .directive('navigationSidebar', function ($location, $mdSidenav, $mdUtil, $log) {
  'use strict';
        return {
            templateUrl: '../../views/templates/navigationSidebar.html',
            restrict: 'E',

            link: function (scope) {
                var fixed = false;
                scope.open = function(){
                    if(fixed){
                        fixed = false;
                    }
                    $mdSidenav('side_nav').open();

                }
                scope.close = function(){
                    if(!fixed) {
                        $mdSidenav('side_nav').close();
                    }
                }
                scope.toggle = function(){
                    fixed = !fixed;
                    if(fixed){
                        $mdSidenav('side_nav').open();
                    } else {
                        $mdSidenav('side_nav').close();
                    }

                }
            }
        };
    });
