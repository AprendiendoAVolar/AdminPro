'use strict';
angular.module('AdminPro', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        template : '<h1>To be Completed</h1>',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': { //esto hace que solo cambie el contenido, el header y el footer se queda!
                        template: '<h1>To be Completed</h1>',
                        controller  : 'AboutController'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactCtrl'
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MainCtrl'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/details.html',
                        controller  : 'DetailsCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });
