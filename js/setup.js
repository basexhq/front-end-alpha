// THINK: do we require MetaMask to access the website?
// For the time being yes, as it allows to read the data
// TODO: obviously do not require it

async function initializeETH() {

    let signer, provider;
    try {
        provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        signer = provider.getSigner()
    } catch {
        console.error("Initialising MetaMask failed");
        document.getElementById("metamask-required").classList.add("visible");
        return;
    }

    // Check if there is correct network
    if (window.ethereum.networkVersion != networkId) {
        // TODO: https://stackoverflow.com/questions/68252365/how-to-trigger-change-blockchain-network-request-on-metamask
        document.getElementById("switch-network").classList.add("visible");
        return
    }
    document.getElementById("metamask-ok").classList.add("visible");

    contract = new ethers.Contract(contractAddress , abi , signer)


    /////// INITIATILISING ORGANISATIONS
    const organisationsLength = (await contract.organisationsLength()).toNumber();

    let arrayOfPromises = [];
    for (let i=0; i<organisationsLength; i++) {
        arrayOfPromises.push(contract.organisations(i))
    }
    let tempResult = await Promise.all(arrayOfPromises);

    /* global */ organisations = tempResult.map(item => ({ // the initial result is the array: ['10ecafed-3a5a-4b5c-b29e-aa97d48c8238', 'Tesla', orgId: '10ecafed-3a5a-4b5c-b29e-aa97d48c8238', name: 'Tesla']
        orgId: item.orgId, 
        name: item.name 
    }));

    /////// INITIATILISING REPORTS
    const reportsLength = (await contract.reportsLength()).toNumber();

    arrayOfPromises = [];
    for (let i=0; i<reportsLength; i++) {
        arrayOfPromises.push(contract.reports(i))
    }
    tempResult = await Promise.all(arrayOfPromises);

    /* global */ reports = tempResult.map(item => ({ 
        reportId: item.reportId, 
        orgId: item.orgId,
        uploader: item.uploader,
        uploadDate: new Date(item.uploadDate * 1000),
        accountingPeriodStart: new Date(item.accountingPeriodStart * 1000),
        accountingPeriodEnd: new Date(item.accountingPeriodEnd * 1000),
        sourceURL: item.sourceURL,
        ipfsHash: item.ipfsHash,
        title: item.title,
        comments: item.comments
    }));

    /////// INITIATILISING EVALUATIONS
    const evaluationsLength = (await contract.evaluationsLength()).toNumber();
    arrayOfPromises = []
    for (let i=0; i<evaluationsLength; i++) {
        arrayOfPromises.push(contract.evaluations(i))
    }
    tempResult = await Promise.all(arrayOfPromises);

    console.log(tempResult);

    /* global */ evaluations = tempResult.map(item => ({ 
        evaluationId: item.evaluationId,
        reportId: item.reportId || item.orgId, // TODO FIX ME: naming issue in an old version of the smart contract
        ipfsHash: item.ipfsHash,
        author: item.author,
        timestamp: new Date(item.timestamp * 1000) 
    }));

    /////// LEFT INTENTIONALLY FOR DEBUGGING PURPOSES
    console.log("Organisations", organisations)
    console.log("Reports", reports);
    console.log("Evaluations", evaluations);


    // https://docs.angularjs.org/guide/bootstrap
    // Examples of when you'd need to do this include using script loaders or the need to perform an operation before AngularJS compiles a page.
    angular.element(function() {
        angular.bootstrap(document, ['app']);
    });

}

initializeETH();