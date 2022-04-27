app.service('data', function ($q) {
  let service = {};

//   service.getReports = function() {
    
//     return [
//         {
//             reportId: 'ae702e21-7895-437d-a422-b3170d485acb',
//             orgId: '9d0c5973-8fc3-4a32-b8d2-b2ed23c326bb',
//             date: '2022-02-22',
//             accountingPeriodStart: '2021-01-01',
//             accountingPeriodEnd: '2021-12-31',
//             sourceURL: 'https://www.gstatic.com/gumdrop/sustainability/google-2021-environmental-report.pdf',
//             ipfs: 'QmW2RXnrqbehV6CSswjRmUhGNKWqAZak8LQ5JHxnYXRnrq',
//             title: 'Google Environmental Report 2021',
//             comments: 'Sample content - Lorem ipsum'
//         },
//         {
//             reportId: '05c27c02-064e-4ee3-afa7-f9675a001b47',
//             orgId: '891c3bff-e66f-4b2e-88cd-7132b2900ca7',
//             date: '2022-02-21',
//             accountingPeriodStart: '2020-01-01',
//             accountingPeriodEnd: '2020-12-31',
//             sourceURL: 'https://sustainability.aboutamazon.com/pdfBuilderDownload?name=amazon-sustainability-2020-reportf',
//             ipfs: 'QmTJscoacG5DPqafuJrWxnF1si1smgJDgwJTtGt4S53Bng',
//             title: 'Amazon Sustainability 2020 Report',
//             comments: 'Sample content - Lorem ipsum'
//         },
//         {
//             reportId: 'b861369c-a285-44ee-9e8a-342dbd880eaa',
//             orgId: '987fc002-65f3-46e7-b41d-7c6a8fdf4ae0',
//             date: '2022-02-20',
//             accountingPeriodStart: '2020-01-01',
//             accountingPeriodEnd: '2020-12-31',
//             sourceURL: 'https://www.tesla.com/ns_videos/2020-tesla-impact-report.pdf',
//             ipfs: 'QmPjtsxhqMSKDP7oSakHqKsiCGnJzsuTvKyRdQ7Ek9h5D2',
//             title: 'Tesla Impact Report 2020',
//             comments: 'Sample content - Lorem ipsum'
//         },
//         // {
//         //     organisation: '',
//         //     date: '',
//         //     accountingPeriodStart: '',
//         //     accountingPeriodEnd: '',
//         //     sourceURL: '',
//         //     ipfs: '',
//         //     title: '',
//         //     comments: ''
//         // },
//     ]

//   }


//   service.getOrganisations = function() {
    
//     return [
//         {
//             orgId: '9d0c5973-8fc3-4a32-b8d2-b2ed23c326bb',
//             name: 'Google'
//         },
//         {
//             orgId: '891c3bff-e66f-4b2e-88cd-7132b2900ca7',
//             name: 'Amazon'
//         },
//         {
//             orgId: '987fc002-65f3-46e7-b41d-7c6a8fdf4ae0',
//             name: 'Tesla'
//         }
//     ]

//   }

  service.getOrganisationNameById = function(guid) {
    for (let i=0; i<organisations.length; i++) {
        if (organisations[i].orgId.toLocaleLowerCase() === guid.toLocaleLowerCase()) {
            return organisations[i].name;
        } 
    }
    console.error("Not found the organisation with the ID: " + guid);
    return "NOT FOUND";
  }

  return service;
  
});