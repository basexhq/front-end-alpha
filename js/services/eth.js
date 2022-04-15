app.service('eth', function ($q) {
  let service = {};

  service.addOrganisation = function(name) {
    return contract.addOrganisation(name); 
  }

  service.addEvaluation = function(orgId, ipfsHash) {
    return contract.addEvaluation(orgId, ipfsHash);
  }

  return service;
  
});