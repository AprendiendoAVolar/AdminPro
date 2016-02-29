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

        $scope.cleanComment();

        //$routeParams.id viene como String, y tengo que mandar un int, por eso la conversion.
        $scope.dish = mainService.getDish(parseInt($stateParams.id, 10));

        $scope.sendComment = function(){

            $scope.comment.date = new Date();
            $scope.dish.comments.push($scope.comment);
            console.log($scope.comment);
            $scope.cleanComment();
            $scope.detailsForm.$setPristine();
        };


    }]);