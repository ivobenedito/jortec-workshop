//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-route

var PersonController = function ($scope) {
  $scope.name = 'First person name';
  $scope.age = 20;
};

var AnotherPersonController = function ($scope) {
  $scope.name = 'Second person name';
  $scope.age = 40;
};