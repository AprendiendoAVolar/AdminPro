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

            //$routeParams.id viene como String, y tengo que mandar un int, por eso la conversion.
            mainService.getDish(parseInt($stateParams.id, 10)).then(
                function(response){
                    $scope.dish = response.data;
                    $scope.showDetails = true;
                },
                function(response){
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                    $scope.showDetails = false;
                }
            );

            $scope.sendComment = function(){

                $scope.comment.date = new Date();
                $scope.dish.comments.push($scope.comment);
                console.log($scope.comment);
                $scope.cleanComment();
                $scope.detailsForm.$setPristine();
            };


    }]);