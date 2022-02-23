app.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrlModal = this;
    $ctrlModal.items = items;
    $ctrlModal.selected = {
      item: $ctrlModal.items[0]
    };
  
    $ctrlModal.ok = function () {
      $uibModalInstance.close($ctrlModal.selected.item);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });