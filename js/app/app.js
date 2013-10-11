var demoApp = angular.module('demo', ['ngAnimate', 'ngRoute'], function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/home', {
        templateUrl: 'js/app/view/home.html',
        controller: HomeCtrl,
        controllerAs: 'home'
    });
    
});
