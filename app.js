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

    .when('/thesis', {
      templateUrl : 'pages/thesis.html',
      controller  : 'ThesisController'
    })

    .when('/demo', {
      redirectTo: function(routeParams) {
        window.location = 'http://107.23.225.239';
    }
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

app.controller('ThesisController', function($scope) {
  $scope.message = 'Hello from ThesisController';
});

