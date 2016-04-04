angular.module('BeerCtrls', ['BeerServices'])
.controller('BeerCtrl', ['$scope', 'Beer', function($scope, Beer) {

}])

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("hi");
  $scope.searchTerm = '';
  $scope.beers = [];

  $scope.search = function() {
    var req = {
      url: '/api/beers',
      method: 'GET',
      params: {
        q : $scope.searchTerm,
      }
    };
    $http(req).then(function success(res) {
      $scope.beers = res.data;
      console.log($scope.beers);
    }, function error(res) {
      console.log(res);
    });
  }
}])