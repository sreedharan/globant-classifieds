var app = angular.module('classifiedsApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'landingController'
    })

    .when('/listing', {
        templateUrl: 'pages/listing.html',
        controller: 'listingController'
    })

    .otherwise({ redirectTo: '/home' });
});

app.controller('landingController', function($scope) {

});

app.controller('listingController', function($scope) {

});