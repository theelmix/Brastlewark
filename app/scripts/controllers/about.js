'use strict';

/**
 * @ngdoc function
 * @name Brastlewark.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the Brastlewark
 */
angular.module('Brastlewark')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });