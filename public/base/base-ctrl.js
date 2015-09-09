var app = angular.module('randomGroupGenerator');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

app.controller('BaseCtrl',
 ['$scope', '$window', 
     function($scope, $window) {
        $scope.items = [];
        $scope.groups = [];
        $scope.shuffled = [];

        $scope.addItem = function(item) {
          $scope.items.push(item);
          $scope.inputItem = "";
        };

        $scope.removeItem = function(index) {
          $scope.items.splice(index, 1);
        };

        $scope.makeGroups = function(groupSize) {
          $scope.shuffled = $scope.items.slice(0);
          $scope.groups = [];
          shuffle($scope.shuffled);
          var currentPos = 0;
          var groupSizeInt = parseInt($scope.groupSize, 10);
          while (currentPos < $scope.shuffled.length) {
            $scope.groups.push($scope.shuffled.slice(currentPos, currentPos + groupSizeInt));
            currentPos += groupSizeInt;
            console.log(currentPos);
          }
        };
    }]);
