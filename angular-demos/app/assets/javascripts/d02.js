//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-route

var PersonController = function ($scope) {
  $scope.name = 'First person name';
  $scope.age = 20;

  $scope.$watch('name', function () {
    console.log('PersonController -> ' + $scope.name);
  });
};

var AnotherPersonController = function ($scope) {
  $scope.name = 'Second person name';
  $scope.age = 40;

  $scope.$watch('name', function () {
    console.log('AnotherPersonController -> ' + $scope.name);
  });
};