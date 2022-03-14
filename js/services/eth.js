app.service('eth', function ($q) {
  let service = {};

  service.addOrganisation = async function(name) {
    var deferred = $q.defer();

    // const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });
    // const magic = buffer.Buffer(JSON.stringify(data));
    // ipfs.add(magic, (err, result) => {
    //     if(err) {
    //         deferred.reject(err);
    //         console.error(err);
    //     }
    //     // let ipfsLink = "<a href='https://gateway.ipfs.io/ipfs/" + result[0].hash + "'>gateway.ipfs.io/ipfs/" + result[0].hash + "</a>";
    //     // document.getElementById("ipfsLink").innerHTML = ipfsLink;
    //     deferred.resolve(result[0].hash)
    // });

    await contract.addOrganisation(name)

    
    return deferred.promise;
  }

  return service;
  
});