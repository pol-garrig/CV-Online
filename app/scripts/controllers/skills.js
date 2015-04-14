'use strict';

/**
 * @ngdoc function
 * @name projetVitrineApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the projetVitrineApp
 */
angular.module('myWebSiteApp')
  .controller('SkillsCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /*======= Skillset *=======*/
    angular.element(document).ready(function() {

      angular.element('.level-bar-inner').css('width', '0');

      angular.element(window).on('load', function() {

        angular.element('.level-bar-inner').each(function() {

          var itemWidth = angular.element(this).data('level');

          angular.element(this).animate({
            width: itemWidth
          }, 800);

        });

      });

      /* Bootstrap Tooltip for Skillset */
      angular.element('.level-label').tooltip();
      angular.element('.level-label2').tooltip();


    });
  }]);
