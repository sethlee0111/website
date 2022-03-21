var myApp = angular.module('seth_website',['ngRoute']);

myApp.controller('ThesisController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);