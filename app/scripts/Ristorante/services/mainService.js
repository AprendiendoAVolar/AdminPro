'use strict';
angular.module('AdminPro')
    .service('mainService',['$resource', 'baseURL',
        function($resource, baseURL) {

        this.getDishes = function(){
            return $resource(baseURL + "dishes/:id", null, {'update': {method:'PUT'}});
        };

    }]);