var myApp = angular.module('seth_website',['ngRoute']);

myApp.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);