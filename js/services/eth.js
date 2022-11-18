app.service('eth', function ($q) {
  let service = {};

  service.addOrganisation = function(orgId, name) {
    return contract.addOrganisation(orgId, name); 
  }

  service.addReport = function(reportId,  orgId, ipfsHash, accountingPeriodStart, accountingPeriodEnd, sourceURL, title, comments) {
    return contract.addReport(reportId,  orgId, ipfsHash, accountingPeriodStart, accountingPeriodEnd, sourceURL, title, comments);
  }

  service.addEvaluation = function(evalId, reportId, ipfsHash) {
    return contract.addEvaluation(evalId, reportId, ipfsHash);
  }

  return service;
  
});