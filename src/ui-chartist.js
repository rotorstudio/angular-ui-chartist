/*
 * angular-ui-chartist
 * http://https://github.com/rotorstudio/angular-ui-chartist
 * 

 * author: <roccostorm@gmx.de>

 * Version: 0.0.2 - 2014-09-02
 * License: MIT
 */
(function() {

  angular.module('ui.chartist', [])

  .directive('lineChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Line(elem.context, scope.data.data, scope.data.options, scope.data.responsiveOptions);
      }
    };
  })

  .directive('barChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Bar(elem.context, scope.data.data, scope.data.options, scope.data.responsiveOptions);
      }
    };
  })

  .directive('pieChart', function() {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link : function(scope, elem, attrs) {
        Chartist.Pie(elem.context, scope.data.data, scope.data.options, scope.data.responsiveOptions);
      }
    };
  });

})();
