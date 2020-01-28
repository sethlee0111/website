var myApp = angular.module('seth_website',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);