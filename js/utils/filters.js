app.filter('orgNameFromId', function (data) {
    return function (orgId) {
        return  data.getOrganisationNameById(orgId);
    };
});

app.filter('orgNameFromReportId', function (data) {
    return function (reportId) {
        return  data.getOrganisationNameByReportId(reportId);
    };
});

app.filter('reportNameFromId', function (data) {
    return function (reportId) {
        return  data.getReportNameById(reportId);
    };
});

app.filter('fromLocalStorage', function ($window) {
    return function (hash) {
        return  $window.localStorage[hash];
    };
});