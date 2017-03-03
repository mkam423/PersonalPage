'use strict';

/**
 * @ngdoc overview
 * @name To Do App
 * @description
 * # To do Application
 *
 * Main module of the application.
 */
angular
    .module('chill', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/core/views/welcome.html'
            })
            .when('/about_me', {
                templateUrl: 'modules/core/views/about_me.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });