'use strict';

/**
 * @ngdoc overview
 * @name myAngularAppApp
 * @description
 * # myAngularAppApp
 *
 * Main module of the application.
 */
angular
  .module('html5jenterprise', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/readme', {
        templateUrl: 'views/readme.html',
        controller: 'MainCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'MainCtrl'
      })
      .when('/ustraem', {
        templateUrl: 'views/ustream.html',
        controller: 'MainCtrl'
      })
      .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'MainCtrl'
      })
      .when('/post/:eventsname', {
        templateUrl: function(params) {
          return "posts/event/" + params.eventsname + ".html";
        },
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
