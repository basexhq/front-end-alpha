app.controller('EvaluateModalCtrl', function ($uibModalInstance, report, ipfs, eth, utils) {
    var $ctrlModal = this;
    $ctrlModal.report = report;

    $ctrlModal.evaluationResult = {
      sdgs : [
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined },
        { reset: true, value: undefined, comment: undefined }
      ]
    };



    $ctrlModal.ok = async function () {
      let ipfsHash = await ipfs.uploadJSON($ctrlModal.evaluationResult);
      console.info("IPFS hash of the uploaded data: " + ipfsHash + "\nhttps://gateway.ipfs.io/ipfs/" + ipfsHash);
      
      await eth.addEvaluation(utils.guid(), $ctrlModal.report.reportId, ipfsHash);
      
      $uibModalInstance.close($ctrlModal.evaluationResult);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    $ctrlModal.sliderChanged = function(index) {
      // Resetting only when value is different than 0, this is because of some initialisation magic
      if ($ctrlModal.evaluationResult.sdgs[index].value != 0) {
        $ctrlModal.evaluationResult.sdgs[index].reset = false;
      }
    }

    $ctrlModal.resetSDG = function (index) {
      $ctrlModal.evaluationResult.sdgs[index].reset = true;
      $ctrlModal.evaluationResult.sdgs[index].value = 0;
    }
  });