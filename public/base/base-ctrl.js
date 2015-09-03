var app = angular.module('randomGroupGenerator');

app.controller('BaseCtrl',
 ['$scope', '$window', 
     function($scope, $window) {
        $scope.items = ['Civic', 'WRX', 'Impreza', 'Celica'];
    }]);
