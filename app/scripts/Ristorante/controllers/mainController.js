'use strict';
angular.module('AdminPro')
    .controller('MainCtrl', ['$scope', 'mainService',
        function($scope, mainService){

        $scope.tab = 1;
        $scope.filtText = "";
        $scope.showDetails = false;

        $scope.dishes = mainService.getDishes();

        $scope.toggleDetails = function(){
            $scope.showDetails = !$scope.showDetails;
        };

        $scope.select = function(index){
            $scope.tab = index;
            if(index === 2){
                $scope.filtText = "appetizer";
            }
            else if (index === 3){
                $scope.filtText = "mains";
            }
            else if (index === 4){
                $scope.filtText = "dessert";
            }
            else{
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function(value){
            return $scope.tab === value;
        };

    }]);
