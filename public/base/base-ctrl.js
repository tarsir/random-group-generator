var app = angular.module('randomGroupGenerator');

app.controller('BaseCtrl',
 ['$scope', '$window', 
     function($scope, $window) {
        $scope.items = [];

        $scope.addItem = function(item) {
          $scope.items.push(item);
        };

        $scope.removeItem = function(index) {
          $scope.items.splice(index, 1);
        };
    }]);
