'use strict';

/**
 * @ngdoc function
 * @name Brastlewark.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Brastlewark
 */
angular.module('Brastlewark')
    .controller('MainCtrl', function($scope, dataservice) {
        var vm = this;

        $scope.imagePath = '/images/cordova.png';

        $scope.page = 1;

        $scope.totalItems = [{ itemName: "Tom" },
            { itemName: "Tim" },
            { itemName: "Tum" },
            { itemName: "Tam" },
            { itemName: "Tem" },
            { itemName: "Tiem" },
            { itemName: "Pum" }
        ];


        $scope.displayItems = $scope.totalItems.slice(0, 25);

        $scope.pageChanged = function() {
            var startPos = ($scope.page - 1) * 25;
            $scope.displayItems = $scope.totalItems.slice(startPos, startPos + 25);
            console.log($scope.page);
        };

        $scope.searchFriend = function(friend) {
            $scope.filterText = friend;
        }

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
                    $scope.totalItems = data;
                    return vm.avengers;
                });
        }

    });