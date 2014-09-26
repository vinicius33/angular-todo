'use strict';

angular
  .module('todoApp.directives', [])
  .directive('dropdown', [function(){
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        iElm.dropdown();
      }
    };
  }]);
