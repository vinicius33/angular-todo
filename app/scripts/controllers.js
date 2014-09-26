'use strict';

angular
  .module('todoApp.controllers', [])
  .controller('TasksCtrl', ['$scope', '$routeParams'
    , function($scope, $routeParams){

    $scope.filterAll = true;
    $scope.showAddTask = false;

    $scope.tasks = [
      {
        title: 'Take shower',
        labelTitle: 'Wow!',
        labelColor: 'warning',
        completed: false
      },
      {
        title: 'Lorem Ipsum',
        labelTitle: 'Wow!',
        labelColor: 'default',
        completed: false
      },
      {
        title: 'Dolor Sit',
        labelTitle: 'Wow!',
        labelColor: 'success',
        completed: false
      },
      {
        title: 'Consectetur',
        labelTitle: 'Wow!',
        labelColor: 'info',
        completed: false
      }
    ];

    $scope.task = {};

    $scope.$on('$routeChangeSuccess', function () {
      var status = $scope.status = $routeParams.status || '';

      $scope.statusFilter = (status === 'active') ?
        { completed: false } : (status === 'completed') ?
        { completed: true } : null;
    });

    $scope.addTask = function () {

      $scope.tasks.push($scope.task);
      $scope.task = {};

    };

    $scope.removeTask = function (item) {
      $scope.tasks.splice($scope.tasks.indexOf(item), 1);
    };

  }]);
