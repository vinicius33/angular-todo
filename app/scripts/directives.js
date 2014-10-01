'use strict';

angular
  .module('app.directives', [])
  .directive('dropdown', [function(){
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        iElm.dropdown();
      }
    };
  }])
  .directive('navPills', ['$location', function($location){
    return {
      restrict: 'E',
      templateUrl: 'views/includes/navpills.html',
      link: function($scope, iElm, iAttrs, controller) {

        var route = $location.$$url;

        iElm
          .find('a[ng-href="#'+route+'"]')
          .parent()
          .addClass('active');

        iElm
          .find('a')
          .on('click', function (e) {
            iElm.find('li').removeClass('active');
            $(e.target).parent().addClass('active');
          });

      }
    };
  }]);
