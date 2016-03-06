'use strict';
//$resource(url, [paramDefaults], [actions], options);
angular.module('AdminPro', ['ui.router', 'ngResource'])
    .constant("baseURL", "http://localhost:3000/")
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
                        templateUrl : 'views/ristorante/home.html',
                        controller  : 'IndexCtrl'
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
                        templateUrl : 'views/ristorante/aboutus.html',
                        controller  : 'AboutCtrl'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/ristorante/contactus.html',
                        controller  : 'ContactCtrl'
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/ristorante/menu.html',
                        controller  : 'MainCtrl'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/ristorante/details.html',
                        controller  : 'DetailsCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });
