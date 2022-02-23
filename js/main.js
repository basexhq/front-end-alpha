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
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: "ListCtrl",
      controllerAs: "$ctrl"
    })
    .otherwise('/home')

});