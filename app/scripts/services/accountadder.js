'use strict';

/**
 * @ngdoc service
 * @name gauthApp.AccountAdder
 * @description
 * # AccountAdder
 * Service in the gauthApp.
 */
angular.module('gauthApp')
  .service('AccountAdder', function (config,$resource) {
    return $resource(config.backend+'/account_add');
  });
