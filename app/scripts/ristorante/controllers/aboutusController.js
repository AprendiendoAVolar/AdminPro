'use strict';
angular.module('AdminPro')
    .controller('AboutCtrl', ['$scope', 'corporateService',
        function($scope, corporateService){

            $scope.leaders = corporateService.getLeaders();

    }]);