'use strict';
angular.module('AdminPro')
    .service('promotionService',['$resource', 'baseURL',
        function($resource, baseURL) {

        this.getPromotion = function(){
            return $resource(baseURL + "promotions/:id", null, {'update': {method: 'PUT'}}); //en este caso el ID es el INDEX
        };
    }]);