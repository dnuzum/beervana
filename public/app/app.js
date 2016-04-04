var app = angular.module('BeervanaApp', ['ui.router', 'BeerCtrls', 'ui.bootstrap']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'app/views/beerSearch.html',
      controller: 'SearchCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    });
    
    $locationProvider.html5Mode(true);
}])

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){
  
}])
