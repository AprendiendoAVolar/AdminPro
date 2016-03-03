'use strict';
angular.module('AdminPro')
    .service('mainService',['$http', 'baseURL',
        function($http, baseURL) {

        this.getDishes = function(){
            return $http({
                method: 'GET',
                url: baseURL + "dishes"
            });
        };

        this.getDish = function(index){
            return $http.get(baseURL + "dishes/" + index);
        };

    }]);