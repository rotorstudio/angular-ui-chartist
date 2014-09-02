/*
 * angular-ui-chartist
 * http://...

 * Version: 0.0.1 - 2014-09-02
 * License: MIT
 */
(function() {

  angular.module('ui.chartist', [])

  .directive('lineChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Line('#'+attrs.id, scope.data, scope.options, responsiveOptions);
      }
    };
  })

  .directive('barChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Bar('#'+attrs.id, scope.data, scope.ptions);
      }
    };
  })

  .directive('pieChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Pie('#'+attrs.id, scope.data, scope.options);
      }
    };
  });

})();