var app = angular.module('classifiedsApp');

app.controller("headerController", ['$scope', function($scope) {

    $scope.listing = [
        { "name": "Housing" },
        { "name": "Automotive" },
        { "name": "Furniture" },
        { "name": "Electronics" },
        { "name": "Household" },
        { "name": "Other" }
    ];

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


app.controller("footerController", ['$scope', function($scope) {}]);


app.controller("landingController", ['$scope', function($scope) {
    $scope.listing = [
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
    ];


    $scope.showData = function() {
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

app.controller("listingController", ['$scope', function($scope) {
    $scope.listItems = [
        { "listImage": "../images/product-item.png", "color": "green", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "green", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "green", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "title", "price": "011110" }
    ];
    $scope.trendingListing = [
        { "listImage": "../images/product-item.png", "color": "green", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "title", "price": "011110" },
    ];
}]);


app.controller("DropdownCtrl", ['$scope', function($scope) {

    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}]);