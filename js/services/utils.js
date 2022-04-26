app.service('utils', function ($q) {
    let service = {};
  
    service.guid = function() {
        return uuid.v4();
    }
  
    return service;
    
  });