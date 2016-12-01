(function() {
    var app = angular.module('classifiedsApp', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngAnimate']);

    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

        // default route
        $urlRouterProvider.otherwise("/home");
        var header = {
            url: '/header',
            templateUrl: '../pages/header.html',
            controller: 'headerController'

        }
        var footer = {
                url: '/footer',
                templateUrl: '../pages/footer.html',
                controller: 'footerController'

            }
            // ui router states
        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    header: header,
                    content: {
                        templateUrl: '../pages/home.html',
                        controller: 'landingController'
                    },
                    footer: footer
                }
            })
            .state('listing', {
                url: "/listing",
                views: {
                    header: header,
                    content: {
                        templateUrl: '../pages/listing.html',
                        controller: 'listingController'
                    },
                    footer: footer
                }
            })
            .state('createListing', {
                url: "/createListing",
                views: {
                    header: header,
                    content: {
                        templateUrl: '../pages/createListing.html',
                        controller: 'createListingController'
                    },
                    footer: footer
                }
            });
    }]);
})();