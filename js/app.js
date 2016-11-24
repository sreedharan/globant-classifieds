var app = angular.module('classifiedsApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    var header = {
        url: '/header',
        templateUrl: '../pages/header.html',
        controller: 'headerController'

    }
    var footer = {
        url: '/footer',
        templateUrl: '../pages/footer.html',
        controller: function($scope) {}

    }

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
        });

});