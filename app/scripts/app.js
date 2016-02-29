'use strict';
angular.module('AdminPro', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/contactus',{
                templateUrl: 'contactus.html',
                controller: 'ContactCtrl'
            })
            .when('/menu',{
                templateUrl: 'menu.html',
                controller: 'MainCtrl'
            })
            .when('/menu/:id',{
                templateUrl: 'details.html',
                controller: 'DetailsCtrl'
            })
            .otherwise('/contactus');
    });
