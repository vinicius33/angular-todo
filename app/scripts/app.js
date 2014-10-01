'use strict';

angular
  .module('app', ['ngRoute', 'app.services', 'app.controllers', 'app.directives'])
  .config(['$provide', '$routeProvider'
    , function ($provide, $routeProvider) {

    $routeProvider
      .when('/', {
        redirectTo: '/tasks'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html'
      })
      .when('/tasks/:status', {
        templateUrl: 'views/tasks.html'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/examples/:id', {
        templateUrl: function (params) {
          return 'views/code-examples/example-' + params.id + '.html';
        }
      })
      .when('/interesting', {
        templateUrl: 'views/interesting.html',
        controller: 'InterestingCtrl'
      });

  }]);

angular.bootstrap(document, ['app']);
