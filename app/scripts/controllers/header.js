'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('HeaderCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('assets/json/header.json')
      .success(function(data) {
        $scope.header = data;
      })
      .error(function(error) {
        console.log(error);
      });

  }]);
