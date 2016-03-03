'use strict';
angular.module('AdminPro')
    .service('corporateService', ['$http', 'baseURL',
        function($http, baseURL) {

        this.getLeaders = function(){
            return $http.get(baseURL + "leadership");
        };

        this.getLeader = function(id){
            return $http.get(baseURL + "leadership/" + id); //en este caso el id es el index
        };

    }]);