'use strict';

angular.module('AdminPro')
    .controller('ContactCtrl', ['$scope',
        function($scope){

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

    }]);