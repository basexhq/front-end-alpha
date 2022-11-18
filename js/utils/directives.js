// Source: https://stackoverflow.com/a/19647381

app.directive('customOnChange', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var onChangeHandler = scope.$eval(attrs.customOnChange);
        element.on('change', onChangeHandler);
        element.on('$destroy', function() {
          element.off();
        });
  
      }
    };
  });

app.directive('evaluationResult', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/evaluationResultDirective.html',
    scope: {
      hash: '='
    },
    link: function(scope, element, attr) {
      // console.log(scope.hash);
    }
  };

});