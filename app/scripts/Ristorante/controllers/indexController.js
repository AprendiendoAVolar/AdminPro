'use strict';
angular.module('AdminPro')
    .controller('IndexCtrl', ['$scope', 'mainService', 'promotionService', 'corporateService',
        function ($scope, mainService, promotionService, corporateService){

            $scope.dish = mainService.getDish(0);

            $scope.promotion = promotionService.getPromotion(0);

            $scope.leader = corporateService.getLeader(2);

    }]);