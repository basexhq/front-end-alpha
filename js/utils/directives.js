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

app.directive('evaluationResult', function(ipfs) {
  return {
    restrict: 'EA',
    templateUrl: 'views/evaluationResultDirective.html',
    scope: {
      hash: '='
    },
    link: async function(scope, element, attr) {
      ipfs.retrieve(scope.hash).then(function(data) {
        scope.ev = JSON.parse(data);
      })
    }
  };

});