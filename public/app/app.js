var app = angular.module('BeervanaApp', ['ui.router', 'BeerCtrls', 'ui.bootstrap', 'angular-scroll-animate']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'HomeCtrl'
    })
    .state('beerSearch', {
      url: '/searchbeer',
      templateUrl: 'app/views/beerSearch.html',
      controller: 'SearchBeerCtrl'
    })
    .state('brewerySearch', {
      url: '/searchbrewery',
      templateUrl: 'app/views/brewerySearch.html',
      controller: 'SearchBreweryCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/views/userSignup.html',
      controller: 'SignupCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/userLogin.html',
      controller: 'LoginCtrl'
    })
    .state('faves', {
      url: '/favorites',
      templateUrl: 'app/views/userFaves.html',
      controller: 'FaveCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    });
    
    $locationProvider.html5Mode(true);
}])

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])