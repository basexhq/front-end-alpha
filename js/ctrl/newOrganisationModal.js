app.controller('NewOrganisationModalCtrl', function ($uibModalInstance, eth, ipfs) {
    var $ctrlModal = this;

    $ctrlModal.ok = async function () {
      console.info("New organisation name: " + $ctrlModal.name);
      await eth.addOrganisation($ctrlModal.name);
      $uibModalInstance.close($ctrlModal.name);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });