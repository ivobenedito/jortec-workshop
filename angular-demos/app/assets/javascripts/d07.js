//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-route

var ContactsController = function ($scope) {
  $scope.people = [
    { name: 'Francisco', number: '123456789' },
    { name: 'Joana',     number: '987654321' },
    { name: 'Catarina',  number: '987651234' },
    { name: 'Vasco',     number: '543216789' }
  ];
};