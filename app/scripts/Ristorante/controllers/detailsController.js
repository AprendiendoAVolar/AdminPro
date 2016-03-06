'use strict';

angular.module('AdminPro')
    .controller('DetailsCtrl', ['$scope', '$stateParams' ,'mainService',
        function($scope, $stateParams, mainService){

            $scope.cleanComment = function(){
                $scope.comment = {
                    author:'',
                    rating:5,
                    comment:'',
                    date: null
                };
            };

            $scope.message = "Loading...";
            $scope.showDetails = false;

            $scope.cleanComment();

            mainService.getDishes().get({id:parseInt($stateParams.id,10)})
                .$promise.then(
                    function(response){
                        $scope.dish = response;
                        $scope.showDetails = true;
                    },
                    function(response){
                        $scope.message = "Error: "+ response.status + " " + response.statusText;
                    }
                );

            $scope.sendComment = function(){

                $scope.comment.date = new Date();
                $scope.dish.comments.push($scope.comment);
                mainService.getDishes().update({id:$scope.dish.id}, $scope.dish);
                console.log($scope.comment);
                $scope.cleanComment();
                $scope.detailsForm.$setPristine();
            };


    }]);