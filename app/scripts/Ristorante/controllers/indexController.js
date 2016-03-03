'use strict';
angular.module('AdminPro')
    .controller('IndexCtrl', ['$scope', 'mainService', 'promotionService', 'corporateService',
        function ($scope, mainService, promotionService, corporateService){

            $scope.message = "Loading...";
            $scope.showHome = false;

            mainService.getDish(0).then(
                function(response){
                    $scope.dish = response.data;
                    $scope.showHome = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showHome = false;
                }
            );

            promotionService.getPromotion(0).then(
                function(response){
                    $scope.promotion = response.data;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            corporateService.getLeader(2).then(
                function(response){
                    $scope.leader = response.data;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

    }]);