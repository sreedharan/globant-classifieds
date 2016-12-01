var app = angular.module('classifiedsApp');

// header page controller

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

// footer page controller
app.controller("footerController", ['$scope', function($scope) {}]);

// home page controller
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


// listing page controller
app.controller("listingController", ['$scope', function($scope) {
    //drop down
    $scope.automotive = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.cars = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.type = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.brand = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.year = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.fuelType = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
    ];
    $scope.kmDriven = [
        'Housing',
        'Furniture',
        'Electronics',
        'Household',
        'Other'
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


    //list items
    $scope.listItems = [
        { "listImage": "../images/product-item.png", "color": "green", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "green", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "black", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "green", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "Title", "price": "011110" }

    ];
    $scope.trendingListing = [
        { "listImage": "../images/product-item.png", "color": "green", "title": "Title", "price": "011110" },
        { "listImage": "../images/product-item.png", "color": "orange", "title": "Title", "price": "011110" }

    ];
}]);


// create listing page controller
app.controller("createListingController", ['$scope', function($scope) {

    //accordion
    $scope.oneAtATime = true;

    $scope.groups = [{
            title: 'Step - 1',
            content: 'step 1 content'
        },
        {
            title: 'Step - 2',
            content: 'step 2 content'
        },
        {
            title: 'Step - 3',
            content: 'step 3 content'
        },
        {
            title: 'Step - 4',
            content: 'step 4 content'
        }

    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
}]);