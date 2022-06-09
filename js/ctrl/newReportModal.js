app.controller('NewReportModalCtrl', function ($scope, $uibModalInstance, eth, ipfs, organisations, utils) {
    var $ctrlModal = this;

    $ctrlModal.organisations = organisations;

    // Setting the default dates - 1 year - that ended in the previous calendar year - less clicking - less hassle - smart default - better UI UX
    let currentYear = (new Date()).getFullYear();
    $ctrlModal.accountingPeriodStart = new Date(currentYear - 1, 0, 1);
    $ctrlModal.accountingPeriodEnd   = new Date(currentYear - 1, 11, 31, 23, 59, 59);

    $ctrlModal.ok = async function () {
      $ctrlModal.accountingPeriodEnd.setHours(23); // For consistency we are setting it up as the end of the day
      $ctrlModal.accountingPeriodEnd.setMinutes(59);
      $ctrlModal.accountingPeriodEnd.setSeconds(59);

      console.log($ctrlModal.accountingPeriodStart);
      console.log($ctrlModal.accountingPeriodEnd);


      // addReport(string memory reportId, string memory orgId, string memory ipfsHash, uint accountingPeriodStart, uint accountingPeriodEnd, string memory sourceURL, string memory title, string memory comments)
    
      await eth.addReport(utils.guid(), $ctrlModal.selectedOrganisation, $ctrlModal.ipfsHash, utils.dateToUnix($ctrlModal.accountingPeriodStart), utils.dateToUnix($ctrlModal.accountingPeriodEnd), $ctrlModal.sourceURL, $ctrlModal.title, $ctrlModal.comments || "");
      $uibModalInstance.close($ctrlModal.name);
    };
  
    $ctrlModal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    $ctrlModal.upload = async function(event) {
      $ctrlModal.state = "uploading"; $scope.$apply(); // Need to use $scope: https://stackoverflow.com/questions/27490197/what-is-the-this-equivalent-of-scope-apply-in-angularjs
      $ctrlModal.ipfsHash = ipfsHash = await ipfs.uploadFile(event.target.files[0]);
      $ctrlModal.state = "uploaded"; $scope.$apply();
      console.log($ctrlModal.ipfsHash);
    }
  });