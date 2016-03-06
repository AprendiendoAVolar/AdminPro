'use strict';
angular.module('AdminPro')
    .controller('AboutCtrl', ['$scope', 'corporateService',
        function($scope, corporateService){

            $scope.message = "Loading...";
            $scope.showAboutus = false;
            corporateService.getLeaders().query(
                function(response){
                    $scope.leaders = response;
                    $scope.showAboutus = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showAboutus = false;
                }
            );

    }]);