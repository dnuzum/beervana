angular.module('BeerCtrls', ['BeerServices'])
.controller('BeerCtrl', ['$scope', 'Beer', function($scope, Beer ) {

}])

app.controller('SearchCtrl', ['$scope', '$http','$rootScope', '$document', function($scope, $http, $rootScope, $document) {
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

  $scope.animateElementIn = function($el) {
    console.log($el['0'])
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };
}]);

app.controller("HomeCtrl", ["scope", function($scope){
  $scope.animateElementIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };
}])


