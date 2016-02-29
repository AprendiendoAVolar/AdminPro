'use strict';
angular.module('AdminPro')
    .service('promotionService', function(){
        this.promotions = [
            {
                _id:0,
                name:'Weekend Grand Buffet',
                image: 'images/buffet.png',
                label:'New',
                price:'19.99',
                description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }

        ];

        this.getPromotion = function(id){
            return this.promotions[id]; //en este caso el ID es el INDEX
        };
    });