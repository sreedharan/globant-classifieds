var app = angular.module('classifiedsApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

    // default route
    $urlRouterProvider.otherwise("/home");
    var header = {
        url: '/header',
        templateUrl: 'pages/header.html',
        controller: 'headerController'

    }
    var footer = {
            url: '/footer',
            templateUrl: 'pages/footer.html',
            controller: function($scope) {}

        }
        // ui router states
    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                header: header,
                content: {
                    templateUrl: 'pages/home.html',
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
                    templateUrl: 'pages/listing.html',
                    controller: 'listingController'
                },
                footer: footer
            }
        });

});







app.controller('rightMenuNav', function($scope) {

});

app.controller('landingController', function($scope) {
    $scope.showData = function() {


        $scope.datalists = [
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" },
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" },
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" },
            { "name": "Housing", "color": "blue" },
            { "name": "Automotive", "color": "green" },
            { "name": "Furniture", "color": "orange" },
            { "name": "Electronics", "color": "black" },
            { "name": "Household", "color": "blue" },
            { "name": "Other", "color": "green" }
        ]

        var pagesShown = 2;
        var pageSize = 3;

        $scope.paginationLimit = function(data) {
            return pageSize * pagesShown;
        };
        $scope.hasMoreItemsToShow = function() {
            return pagesShown < ($scope.datalists.length / pageSize);
        };
        $scope.showMoreItems = function() {
            pagesShown = pagesShown + 2;
        };


    }
});

app.controller('listingController', function($scope) {

});