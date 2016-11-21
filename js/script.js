var app = angular.module('classifiedsApp');

app.controller("headerController", ['$scope', function($scope) {
    $scope.isCollapsedHorizontal = true;
    $scope.isActive = false;
    $scope.activeButton = function() {
        $scope.isActive = !$scope.isActive;
    };
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}]);


app.controller("landingController", ['$scope', function($scope) {
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
}]);