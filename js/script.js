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