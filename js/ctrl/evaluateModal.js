app.controller('EvaluateModalCtrl', function ($uibModalInstance, report, ipfs, eth) {
    var $ctrlModal = this;
    $ctrlModal.report = report;

    $ctrlModal.evaluationResult = {}
  
    $ctrlModal.ok = async function () {
      let ipfsHash = await ipfs.uploadJSON($ctrlModal.evaluationResult);
      console.info("IPFS hash of the uploaded data: " + ipfsHash + "\nhttps://gateway.ipfs.io/ipfs/" + ipfsHash);
      
      eth.addEvalution(ipfsHash);
      
      $uibModalInstance.close($ctrlModal.evaluationResult);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });