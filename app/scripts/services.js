'use strict';

angular
  .module('app.services', [])
  .factory('TasksFactory', ['$http', '$q', function($http, $q){
    
    var exports = {};

    exports.tasks = [];

    exports.getTasks = function () {

      var deferred = $q.defer();

      $http.get('scripts/tasks-demo.json')
        .success(function (data) {
          exports.tasks = data;
          deferred.resolve(data);
        })
        .error(function (data){
          deferred.reject(data);
        });

      return deferred.promise;

    };

    return exports;

  }]);