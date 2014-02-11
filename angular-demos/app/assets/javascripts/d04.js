//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-route

var ListController = function ($scope) {
  $scope.names = ['Ivo', 'Pedro', 'Joao', 'Filipa', 'Maria'];

  $scope.people = [
    { name: 'Ivo',    age: 20 },
    { name: 'Pedro',  age: 30 },
    { name: 'Joao',   age: 40 },
    { name: 'Filipa', age: 50 },
    { name: 'Maria',  age: 60 },
  ];
};