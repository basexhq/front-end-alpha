app.controller('NewReportModalCtrl', function ($uibModalInstance, eth, ipfs, organisations) {
    var $ctrlModal = this;

    $ctrlModal.organisations = organisations;

    console.log('NewReportModalCtrl + organisations', organisations)

    $ctrlModal.ok = async function () {
      console.info("New report name: " + $ctrlModal.name);
      await eth.addOrganisation($ctrlModal.name);
      $uibModalInstance.close($ctrlModal.name);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });