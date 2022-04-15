app.controller("ReportsCtrl", function($scope, data, $uibModal, $log, $window) {   
    $scope.reports = data.getReports();

    var $ctrl = this;

    $ctrl.evaluate = function(report) {
      var modalInstance = $uibModal.open({
        templateUrl: 'views/evaluateModal.html',
        controller: 'EvaluateModalCtrl',
        controllerAs: '$ctrlModal',
        resolve: {
          report: function () {
            return report
          }
        }
      });
    
      modalInstance.result.then(function (result) {
        console.log(result);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      }); 
   }

   $scope.newReport = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/newReportModal.html',
      controller: 'NewReportModalCtrl',
      controllerAs: '$ctrlModal',
      resolve: {
        organisations: function() {
          return $window.organisationNames;
        }
      }
    });

    // modalInstance.result.then(function (result) {
    //   console.log(result);
    //   $window.organisationNames.push(result);
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // }); 
  }


});