'use strict';

/**
 * @ngdoc function
 * @name Brastlewark.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the Brastlewark
 */
angular.module('Brastlewark')
    .controller('SearchCtrl', function($scope, $routeParams, dataservice) {
        var vm = this;

        $scope.searchModel = {
            query: null
        };

        $scope.searchModel.query = $routeParams.query;

        activate();

        function activate() {
            return getAvengers().then(function() {
                console.info('Activated Avengers View');
            });
        }

        function getAvengers() {
            return dataservice.getAvengers()
                .then(function(data) {
                    console.log(data);
                    $scope.quotes = data;
                    return vm.avengers;
                });
        }

    });