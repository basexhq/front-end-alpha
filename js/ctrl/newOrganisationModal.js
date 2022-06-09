app.controller('NewOrganisationModalCtrl', function ($uibModalInstance, eth, utils) {
    var $ctrlModal = this;

    $ctrlModal.ok = async function () {
      console.info("New organisation name: " + $ctrlModal.name);
      await eth.addOrganisation(utils.guid(), $ctrlModal.name);
      $uibModalInstance.close($ctrlModal.name);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });