app.controller('EvaluateModalCtrl', function ($uibModalInstance, report, ipfs, eth, utils) {
    var $ctrlModal = this;
    $ctrlModal.report = report;

    $ctrlModal.evaluationResult = {}
  
    $ctrlModal.ok = async function () {
      let ipfsHash = await ipfs.uploadJSON($ctrlModal.evaluationResult);
      console.info("IPFS hash of the uploaded data: " + ipfsHash + "\nhttps://gateway.ipfs.io/ipfs/" + ipfsHash);
      
      eth.addEvaluation(utils.guid(), $ctrlModal.report.reportId, ipfsHash);
      
      $uibModalInstance.close($ctrlModal.evaluationResult);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });