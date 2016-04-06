angular.module('BeerServices', ['ngResource'])
.factory('Beer', ['$resource', function($resource) {

}])

.factory('Auth', ['$window', function($window) {
  return {
    saveToken: function(token) {
      $window.localStorage['secretbeers-token'] = token;
    },
    getToken: function() {
      return $window.localStorage['secretbeers-token'];
    },
    removeToken: function() {
      $window.localStorage.removeItem('secretbeers-token');
    },
    isLoggedIn: function() {
      var token = this.getToken();
      return token ? true : false;
    }
  };
}])

.factory('AuthInterceptor', ['Auth', function(Auth) {
  return {
    request: function(config) {
      var token = Auth.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  }
}])