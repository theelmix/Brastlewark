'use strict';

/**
 * @ngdoc directive
 * @name Brastlewark.directive:scrollToTopOnNavClick
 * @description
 * # scrollToTopOnNavClick
 */
angular.module('Brastlewark')
    .directive('scrollToTopOnNavClick', function($rootScope, $timeout) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $rootScope.$on('NavClicked', function() {
                    $timeout(function() {
                        //console.debug('NavClicked detected on ' + element[0].outerHTML + ' has scrollTop ' + element[0].scrollTop);
                        element[0].scrollTop = 0;
                        //$window.scrollTo(0,0);
                    });
                });
            }
        };
    });