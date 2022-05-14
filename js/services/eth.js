app.service('eth', function ($q) {
  let service = {};

  service.addOrganisation = function(name) {
    return contract.addOrganisation(name); 
  }

  service.addReport = function(reportId,  orgId, ipfsHash, accountingPeriodStart, accountingPeriodEnd, sourceURL, title, comments) {
    return contract.addReport(reportId,  orgId, ipfsHash, accountingPeriodStart, accountingPeriodEnd, sourceURL, title, comments);
  }

  service.addEvaluation = function(orgId, ipfsHash) {
    return contract.addEvaluation(orgId, ipfsHash);
  }

  return service;
  
});