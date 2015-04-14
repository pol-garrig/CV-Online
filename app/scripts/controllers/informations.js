'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:InformationsCtrl
 * @description
 * # InformationsCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('InformationsCtrl', ['$scope','$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('assets/json/informations.json')
      .success(function(data) {
        $scope.informations = data;
      })
      .error(function(error) {
        console.log(error);
      });
  }]);
