'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:WorkexperienceCtrl
 * @description
 * # WorkexperienceCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('WorkexperienceCtrl', ['$scope','$http', function ($scope, $http){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('assets/json/workexperience.json')
      .success(function(data) {
        $scope.workexperience = data;
      })
      .error(function(error) {
        console.log(error);
      });
  }]);
