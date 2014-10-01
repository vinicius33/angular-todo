'use strict';

angular
  .module('app.controllers', [])
  .controller('TasksCtrl', ['$scope', '$routeParams', 'TasksFactory'
    , function($scope, $routeParams, TasksFactory){

    $scope.filterAll = true;
    $scope.showAddTask = false;

    TasksFactory.getTasks()
      .then(function () {
        $scope.tasks = TasksFactory.tasks;
      });

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

    $scope.editTask = function (item) {

      item.editing = true;
      $scope.originalTask = angular.extend({}, item);

    };

    $scope.doneEditingTask = function (item) {

      item.editing = false;

    };

    $scope.cancelEdit = function ($event, item) {

      if ($event.keyCode !== 27) return;

      $scope.tasks[$scope.tasks.indexOf(item)] = $scope.originalTask;
      item.editing = false;

    };

  }])
  .controller('ExamplesCtrl', ['$scope', '$rootScope', 'TasksFactory'
    , function($scope, $rootScope, TasksFactory){

    $rootScope.myTitle = 'Title outside';
    $scope.myTitle = 'Awesome Title.... put your title here!';

    TasksFactory.getTasks()
      .then(function () {
        $scope.tasks = TasksFactory.tasks;
      });

    $scope.alertUser = function () {
      alert('Hey! ' + $scope.myTitle);
    };

    $scope.keydownUser = function ($event) {

      $scope.keydownDebug = $event;
    };

  }]);
