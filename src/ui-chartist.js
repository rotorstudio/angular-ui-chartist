/*
 * angular-ui-chartist
 * http://https://github.com/rotorstudio/angular-ui-chartist
 * 

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
        options: '=',
        responsiveOptions: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Line('#'+attrs.id, scope.data, scope.options, scope.responsiveOptions);
      }
    };
  })

  .directive('barChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '=',
        responsiveOptions: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Bar('#'+attrs.id, scope.data, scope.options, scope.responsiveOptions);
      }
    };
  })

  .directive('pieChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '=',
        responsiveOptions: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Pie('#'+attrs.id, scope.data, scope.options, scope.responsiveOptions);
      }
    };
  });

})();
