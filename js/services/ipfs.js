app.service('ipfs', function ($q) {
  let service = {};

  service.upload = function(data) {

    const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });

    const magic = buffer.Buffer(JSON.stringify(data));
	
    ipfs.add(magic, (err, result) => {
		console.log(err, result);
        let ipfsLink = "<a href='https://gateway.ipfs.io/ipfs/" + result[0].hash + "'>gateway.ipfs.io/ipfs/" + result[0].hash + "</a>";
        document.getElementById("ipfsLink").innerHTML = ipfsLink;
    });
    
  }

  return service;
  
});