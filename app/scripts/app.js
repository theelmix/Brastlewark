'use strict';

/**
 * app.js
 *
 * This file will contain the module definition, routing, and themeing for the application
 */

/**
 * @ngdoc overview
 * @name Brastlewark
 * @description
 * # Brastlewark
 *
 * Main module of the application.
 */
var app = angular
    .module('Brastlewark', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'infomofo.angularMdPullToRefresh',
        'ui.bootstrap'
    ]);

app
    .config(function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'ctrl'
            })
            .when('/pulltorefresh', {
                templateUrl: 'views/pulltorefresh.html',
                controller: 'PullToRefreshCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/list', {
                templateUrl: 'views/list.html'
            })
            .when('/form', {
                templateUrl: 'views/form.html'
            })
            .when('/dialog', {
                templateUrl: 'views/dialog.html',
                controller: 'DialogCtrl'
            })
            .when('/tabs', {
                templateUrl: 'views/tabs.html'
            })
            .when('/search/:query', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app
    .filter('searchFor', function() {

        // All filters must return a function. The first parameter
        // is the data that is to be filtered, and the second is an
        // argument that may be passed with a colon (searchFor:searchString)

        return function(arr, searchString) {

            if (!searchString) {
                return arr;
            }

            var result = [];

            angular.forEach(arr, function(item) {

                if (item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                    result.push(item);
                }

            });

            return result;
        };

    })
app
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    })

app
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('orange');
    });