'use strict';

angular.module('AdminPro', [])
    .controller('DetailsCtrl', ['$scope', 'MainFactory', function($scope, MainFactory){

        $scope.cleanComment = function(){
            $scope.comment = {
                author:'',
                rating:5,
                comment:'',
                date: null
            };
        };

        $scope.cleanComment();

        $scope.dish = MainFactory.getDish(2);

        $scope.sendComment = function(){

            $scope.comment.date = new Date();
            $scope.dish.comments.push($scope.comment);
            console.log($scope.comment);
            $scope.cleanComment();
            $scope.detailsForm.$setPristine();
        };


    }]);