app.service('ipfs', function ($q, $http, $window) {
  let service = {};

  // https://community.infura.io/t/add-file-to-ipfs-node-js/5148/4
  // We are protecting against API key misuse by configuring ALLOWED HTTP ORIGINS
  const INSECURE = 'Basic MkRSOEpwY3JjbW56Y0VEV015UHkyRDEzNDZlOjJiZmVmNzBmOWIyMjFmM2IwODQyM2Y4YTVlMDVjZDMy';
  const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https', headers: { Authorization: INSECURE } });

  const pinataBaseURL = 'https://gateway.pinata.cloud/ipfs/';
  
  service.uploadJSON = function(data) {
    var deferred = $q.defer();

    const magic = buffer.Buffer(JSON.stringify(data));
	
    ipfs.add(magic, (err, result) => {
      if(err) {
        deferred.reject(err);
        console.error(err);
      }

      deferred.resolve(result[0].hash)
    });
    
    return deferred.promise;
  }

  service.uploadFile = function(file) {
    var deferred = $q.defer();

    var reader = new FileReader();

    reader.onload = function (e) {
      const magic = buffer.Buffer(reader.result); // honestly as a web developer I do not fully appreciate the difference between buffer and arrayBuffer 
      ipfs.add(magic, (err, result) => {
        if(err) {
          deferred.reject(err);
          console.error(err);
        }
  
        deferred.resolve(result[0].hash)
      })
    }
    reader.readAsArrayBuffer(file);

    return deferred.promise;
  }

  service.retrieve = function(hash) {
    var deferred = $q.defer();

    if ($window.localStorage[hash]) {
      deferred.resolve($window.localStorage[hash]); // IPFS is content addressable, if we have the data it means it will not change
    } else {
      const fullIpfsHash = pinataBaseURL + hash;

      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(fullIpfsHash)}`)
        .then(response => {
          if (response.ok) return response.json()
          throw new Error('Network response was not ok.')
        })
        .then(data => {
          $window.localStorage[hash] = data.contents
          deferred.resolve(data.contents);
        });
    }

    return deferred.promise;
  }

  // We retrieve all the data from the blockchain in the setup.js
  // Now we are also retrieving the data from IPFS
  service.retrieveAllEvaluations = function() {
    console.log("IPFS ---> retrieveAllEvaluations");

    let arrayOfPromises = [];
    const evaluationsLength = evaluations.length;
    for (let i=0; i<evaluationsLength; i++) {
      arrayOfPromises.push(service.retrieve(evaluations[i].ipfsHash));
    }
    
    Promise.all(arrayOfPromises).then(function() {
      console.log("IPFS ---> retrieveAllEvaluations ---> done")
    })
  }

  service.retrieveAllEvaluations();

  return service;
  
});