angular.module('nestedView', []).directive('nestedView', function($controller) {
  return {
    restrict: 'EA',
    template: '<div ng-include="templateUrl"></div>',
    scope: {
      controller: '@',
      templateUrl: '=',
      inject: '='
    },
    link: function(scope) {
      var inject = angular.extend({}, scope.inject, {$scope: scope});
      $controller(scope.controller, inject);
    }
  };
});
