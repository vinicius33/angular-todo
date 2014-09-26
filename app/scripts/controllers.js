'use strict';

/**
* hackApp.directives Module
*
* Description
*/

angular
  .module('hackApp.controllers', [])
  .controller('MainController', ['$scope', function($scope){
    
    $scope.tasks = [
      {
        title: 'Take shower',
        labelTitle: 'Wow!',
        labelColor: 'warning',
        status: 0
      },
      {
        title: 'Lorem Ipsum',
        labelTitle: 'Wow!',
        labelColor: 'default',
        status: 0
      },
      {
        title: 'Dolor Sit',
        labelTitle: 'Wow!',
        labelColor: 'success',
        status: 0
      },
      {
        title: 'Consectetur',
        labelTitle: 'Wow!',
        labelColor: 'info',
        status: 0
      }
    ];
    
    $scope.task = {};

    $scope.addTask = function () {

      $scope.tasks.push($scope.task);

    };

  }]);