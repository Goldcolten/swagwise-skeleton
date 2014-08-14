(function(angular) {
    "use strict";

    angular.module("Swagwise")
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: 'views/home.html'

                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'views/contact.html'
                })

                .state('detail', {
                    url: '/detail',
                    templateUrl: 'views/detail.html'
                })

                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html'
                })

                .state('signup', {
                    url: '/signup',
                    templateUrl: 'views/signup.html'
                })

                .state('swag', {
                    url: '/swag',
                    controller: "SwagController",
                    templateUrl: 'views/swag.html'
                })

                .state('cart', {
                    url: '/cart',
                    templateUrl: 'views/cart.html'
                })
        });

})(window.angular);