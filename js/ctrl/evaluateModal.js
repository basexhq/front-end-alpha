app.controller('ModalInstanceCtrl', function ($uibModalInstance, report, ipfs) {
    var $ctrlModal = this;
    $ctrlModal.report = report;

    $ctrlModal.evaluationResult = {}
  
    $ctrlModal.ok = function () {
      ipfs.upload($ctrlModal.evaluationResult)
      // $uibModalInstance.close($ctrlModal.evaluationResult);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });