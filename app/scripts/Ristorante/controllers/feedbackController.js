'use strict';
angular.module('AdminPro')
    .controller('FeedbackCtrl', ['$scope',
        function($scope){

        $scope.sendFeedback = function(){
            if ($scope.feedback.agree &&
                ($scope.feedback.mychannel === "") && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                    agree:false, email:"" };
                $scope.feedback.mychannel="";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }]);