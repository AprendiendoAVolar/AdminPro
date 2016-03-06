'use strict';
angular.module('AdminPro')
    .controller('IndexCtrl', ['$scope', 'mainService', 'promotionService', 'corporateService',
        function ($scope, mainService, promotionService, corporateService){

            $scope.message = "Loading...";
            $scope.showHome = true;

            mainService.getDishes().get({id:0})
                .$promise.then(
                    function(response){
                        $scope.dish = response;
                        $scope.showHome = true;
                    },
                    function(response){
                        $scope.message = "Error: "+ response.status + " " + response.statusText;
                    }
                );

            promotionService.getPromotion().get({id:0})
                .$promise.then(
                    function(response){
                        $scope.promotion = response;
                        $scope.showHome = true;
                    },
                    function(response){
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

            corporateService.getLeaders().get({id:2})
                .$promise.then(
                    function(response){
                        $scope.leader = response;
                        $scope.showHome = true;
                    },
                    function(response){
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

    }]);