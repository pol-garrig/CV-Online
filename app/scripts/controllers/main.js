'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
