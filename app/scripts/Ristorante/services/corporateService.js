'use strict';
angular.module('AdminPro')
    .service('corporateService', ['$resource', 'baseURL',
        function($resource, baseURL) {

        this.getLeaders = function(){
            return $resource(baseURL + "leadership/:id", null, {'update': {method: 'PUT'}});
        };

    }]);