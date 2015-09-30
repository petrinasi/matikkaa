'use strict';

/**
 * @ngdoc overview
 * @name matikkaApp
 * @description
 * # matikkaApp
 *
 * Main module of the application.
 */
angular
  .module('matikkaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
