'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('EducationCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('assets/json/education.json')
      .success(function(data) {
        $scope.education = data;
      })
      .error(function(error) {
        console.log(error);
      });
  }]);
