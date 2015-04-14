'use strict';

/**
 * @ngdoc function
 * @name myWebSiteApp.controller:LanguagesCtrl
 * @description
 * # LanguagesCtrl
 * Controller of the myWebSiteApp
 */
angular.module('myWebSiteApp')
  .controller('LanguagesCtrl', ['$scope', '$http', function ($scope, $http)  {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('assets/json/langues.json')
      .success(function(data) {
        $scope.langues = data;
      })
      .error(function(error) {
        console.log(error);
      });
  }]);

