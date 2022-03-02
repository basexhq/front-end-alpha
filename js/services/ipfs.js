app.service('ipfs', function ($q) {
  let service = {};

  service.upload = function(data) {
    var deferred = $q.defer();

    const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });

    const magic = buffer.Buffer(JSON.stringify(data));
	
    ipfs.add(magic, (err, result) => {
        if(err) {
            deferred.reject(err);
            console.error(err);
        }
        // let ipfsLink = "<a href='https://gateway.ipfs.io/ipfs/" + result[0].hash + "'>gateway.ipfs.io/ipfs/" + result[0].hash + "</a>";
        // document.getElementById("ipfsLink").innerHTML = ipfsLink;
        deferred.resolve(result[0].hash)
    });
    
    return deferred.promise;
  }

  return service;
  
});