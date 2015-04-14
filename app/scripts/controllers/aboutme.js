'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:AboutmeCtrl
 * @description
 * # AboutmeCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('AboutmeCtrl', ['$scope','$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('assets/json/aboutMe.json')
      .success(function(data) {
        $scope.aboutMe = data;
      })
      .error(function(error) {
        console.log(error);
      });

  }]);
