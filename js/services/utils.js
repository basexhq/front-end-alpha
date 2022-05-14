app.service('utils', function ($q) {
    let service = {};
  
    service.guid = function() {
        return uuid.v4();
    }

    service.dateToUnix = function(date) {
        return Math.floor(date.getTime() / 1000);
    }
  
    return service;
    
  });