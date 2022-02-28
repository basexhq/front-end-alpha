app.controller("ListCtrl", function($scope, data, $uibModal, $log, $document) {   
    $scope.reports = data.getReports();

    var $ctrl = this;

    $ctrl.evaluate = function(report) {

        var modalInstance = $uibModal.open({
            templateUrl: 'views/myModalContent.html',
            controller: 'ModalInstanceCtrl',
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
});