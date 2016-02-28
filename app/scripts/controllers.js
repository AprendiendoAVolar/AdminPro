'use strict';
angular.module('AdminPro')
    .controller('MainCtrl', ['$scope', 'MainFactory',
        function($scope, MainFactory){

        $scope.tab = 1;
        $scope.filtText = "";
        $scope.showDetails = false;

        $scope.dishes = MainFactory.getDishes();

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

    }])

    .controller('ContactCtrl', ['$scope', function($scope){

        $scope.feedback = {
            mychannel:"",
            firstName:"",
            lastName: "",
            agree:false,
            email:""
        };

        $scope.channels = [{value:"tel", label:"Tel."},
            {value:"Email", label:"Email"}];
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackCtrl', ['$scope', function($scope){

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
    }])
;
