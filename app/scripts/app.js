'use strict';

/**
 * @ngdoc overview
 * @name myWebSiteApp
 * @description
 * # projetVitrineApp
 *
 * Main module of the application.
 */
angular
  .module('myWebSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'

  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/experience', {
    templateUrl: 'views/experience.html',
    controller: 'ExpeCtrl'
  })
  .when('/reference', {
    templateUrl: 'views/ref.html',
    controller: 'RefCtrl'
  })
  .when('/connaissance', {
    templateUrl: 'views/skills.html',
    controller: 'SkillCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html'
  })
  .otherwise({
    redirectTo: '/'
  });

  }]);
