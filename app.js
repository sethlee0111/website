var app = angular.module("seth_website", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'HomeController'
    })

    .when('/my_works', {
      templateUrl : 'pages/my_works.html',
      controller  : 'MyWorksController'
    })

    .when('/resources', {
      templateUrl : 'pages/resources.html',
      controller  : 'ResourcesController'
    })

    .otherwise({redirectTo: '/'});
    
    });

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('MyWorksController', function($scope) {
  $scope.message = 'Hello from MyWorksController';
});

app.controller('ResourcesController', function($scope) {
  $scope.message = 'Hello from ResourcesController';
});

