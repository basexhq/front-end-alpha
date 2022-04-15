app.filter('orgNameFromId', function (data) {
    return function (orgId) {
        return  data.getOrganisationNameById(orgId);
    };
});