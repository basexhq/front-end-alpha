app.controller('ModalInstanceCtrl', function ($uibModalInstance, report) {
    var $ctrlModal = this;
    $ctrlModal.report = report;

    $ctrlModal.evaluationResult = {}
  
    $ctrlModal.ok = function () {
      $uibModalInstance.close($ctrlModal.evaluationResult);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });