app.controller("ListCtrl", function($scope, data) {
    $scope.message = "It works!";
    
    $scope.reports = data.getReports();

});