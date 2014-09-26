'use strict';

/**
 * @ngdoc function
 * @name hackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackApp
 */
angular.module('hackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
