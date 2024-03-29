// var app = angular.module("app", ["ngRoute", "ui.bootstrap"]);

// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'home.html'
//       controller: "HomeCtrl"
//     })
//     .when('/login', {
//       templateUrl: 'login.html',
//       controller: "LoginCtrl"
//     })
//     .otherwise('/home')
// });

// app.controller("LoginCtrl", function($scope) {
//   $scope.message = "It works!";
// });



var app = angular.module("app", ["ngRoute", 'ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: "HomeCtrl"

    })
    .when('/reports', {
      templateUrl: 'views/reports.html',
      controller: "ReportsCtrl",
      controllerAs: "$ctrl"
    })
    .when('/organisations', {
      templateUrl: 'views/organisations.html',
      controller: "OrganisationsCtrl",
      controllerAs: "$ctrl"
    })
    .when('/evaluations', {
      templateUrl: 'views/evaluations.html',
      controller: "EvaluationsCtrl",
      controllerAs: "$ctrl"
    })
    .otherwise('/home')

});