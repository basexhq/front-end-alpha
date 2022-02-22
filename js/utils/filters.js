app.filter('orgNameFromID', function (data) {
    return function (guid) {
        return  data.getOrganisationNameByID(guid);
    };
});