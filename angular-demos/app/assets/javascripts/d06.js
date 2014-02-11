//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require angular-route

var BrowserController = function ($scope) {
  $scope.clean = function () {
    $scope.path = $scope.path.replace(/\s+/, '-')
                             .replace(/[^a-z0-9-.]+/i, '');
  };
};