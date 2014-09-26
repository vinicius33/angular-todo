'use strict';

angular
  .module('todoApp', ['ngRoute', 'todoApp.controllers', 'todoApp.directives'])
  .config(['$provide', '$routeProvider'
    , function ($provide, $routeProvider) {

    $routeProvider
      .when('/', {
        redirectTo: '/tasks'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/tasks/:status', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/other', {
        templateUrl: 'views/other.html',
        controller: 'OtherCtrl'
      })
      .when('/interesting', {
        templateUrl: 'views/interesting.html',
        controller: 'InterestingCtrl'
      });

  }]);

angular.bootstrap(document, ['todoApp']);
