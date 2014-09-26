'use strict';

/**
* hackApp.directives Module
*
* Description
*/

angular
  .module('hackApp.directives', [])
  .directive('dropdown', [function(){
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        iElm.dropdown();
      }
    };
  }]);