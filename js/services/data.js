app.service('data', function ($q) {
  let service = {};

  service.getReports = function() {
    
    return [
        {
            orgID: '9d0c5973-8fc3-4a32-b8d2-b2ed23c326bb',
            date: '2022-02-22',
            accountingPeriodStart: '2021-01-01',
            accountingPeriodEnd: '2021-12-31',
            sourceURL: 'https://www.gstatic.com/gumdrop/sustainability/google-2021-environmental-report.pdf',
            ipfs: 'QmW2RXnrqbehV6CSswjRmUhGNKWqAZak8LQ5JHxnYXRnrq',
            title: 'Google Environmental Report 2021',
            comments: 'Sample content - Google'
        },
        {
            orgID: '891c3bff-e66f-4b2e-88cd-7132b2900ca7',
            date: '2022-02-21',
            accountingPeriodStart: '2020-01-01',
            accountingPeriodEnd: '2020-12-31',
            sourceURL: 'https://sustainability.aboutamazon.com/pdfBuilderDownload?name=amazon-sustainability-2020-reportf',
            ipfs: 'QmTJscoacG5DPqafuJrWxnF1si1smgJDgwJTtGt4S53Bng',
            title: 'Amazon Sustainability 2020 Report',
            comments: 'Sample content - Amazon'
        },
        {
            orgID: '987fc002-65f3-46e7-b41d-7c6a8fdf4ae0',
            date: '2022-02-20',
            accountingPeriodStart: '2020-01-01',
            accountingPeriodEnd: '2020-12-31',
            sourceURL: '',
            ipfs: 'QmPjtsxhqMSKDP7oSakHqKsiCGnJzsuTvKyRdQ7Ek9h5D2',
            title: 'Tesla Impact Report 2020',
            comments: 'Sample content - Tesla'
        },
        // {
        //     organisation: '',
        //     date: '',
        //     accountingPeriodStart: '',
        //     accountingPeriodEnd: '',
        //     sourceURL: '',
        //     ipfs: '',
        //     title: '',
        //     comments: ''
        // },
    ]

  }


  service.getOrganisations = function() {
    
    return [
        {
            guid: '9d0c5973-8fc3-4a32-b8d2-b2ed23c326bb',
            name: 'Google'
        },
        {
            guid: '891c3bff-e66f-4b2e-88cd-7132b2900ca7',
            name: 'Amazon'
        },
        {
            guid: '987fc002-65f3-46e7-b41d-7c6a8fdf4ae0',
            name: 'Tesla'
        }
    ]

  }

  service.getOrganisationNameByID = function(guid) {
    let organisations = service.getOrganisations();
    for (let i=0; i<organisations.length; i++) {
        if (organisations[i].guid.toLocaleLowerCase() === guid.toLocaleLowerCase()) {
            return organisations[i].name;
        } 
    }
    return "NOT FOUND";
  }

  return service;
  
});