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

var headerController = function($scope) {
    $scope.isCollapsedHorizontal = true;
    $scope.isActive = false;
    $scope.activeButton = function() {
        $scope.isActive = !$scope.isActive;
    }
}

var accordionController = function($scope) {
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}

app.controller('headerController', headerController);
app.controller('accordionController', accordionController);






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