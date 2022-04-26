app.controller("OrgsCtrl", function($scope, data, $uibModal, $log, $document, $window) {   
    $scope.reports = data.getReports();

    $scope.orgs = $window.organisationNames;

    console.log($scope.orgs);

    var $ctrl = this;

    $scope.newOrganisation = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'views/newOrganisationModal.html',
        controller: 'NewOrganisationModalCtrl',
        controllerAs: '$ctrlModal'
      });
  
      modalInstance.result.then(function (result) {
        console.log(result);
        $window.organisationNames.push(result); // Adding newly added organisation to the global store
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      }); 
    }

    

    // $ctrl.evaluate = function(report) {

    //     var modalInstance = $uibModal.open({
    //         templateUrl: 'views/evaluateModal.html',
    //         controller: 'EvaluateModalCtrl',
    //         controllerAs: '$ctrlModal',
    //         resolve: {
    //           report: function () {
    //             return report
    //           }
    //         }
    //       });
      
    //       modalInstance.result.then(function (result) {
    //         console.log(result);
    //       }, function () {
    //         $log.info('Modal dismissed at: ' + new Date());
    //       }); 
    // }
});