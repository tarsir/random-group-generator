angular.module('randomGroupGenerator', [ 'ngRoute' ])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'base/base.html',
        controller: 'BaseCtrl'
    });
    // .otherwise({
    //     redirectTo: '/'
    // });

    $locationProvider.html5mode({ enabled: true, requireBase: false});

}]);
