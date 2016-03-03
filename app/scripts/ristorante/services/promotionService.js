'use strict';
angular.module('AdminPro')
    .service('promotionService',['$http', 'baseURL',
        function($http, baseURL) {

        this.getPromotion = function(id){
            return $http.get(baseURL + "promotions/" +id); //en este caso el ID es el INDEX
        };
    }]);