angular.module('BeerCtrls', ['BeerServices'])
.controller('BeerCtrl', ['$scope', 'Beer', function($scope, Beer ) {

}])

app.controller('SearchBeerCtrl', ['$scope', '$http','$rootScope', '$document', function($scope, $http, $rootScope, $document) {
  // console.log("hi");
  $scope.searchTerm = '';
  $scope.beers = [];
  $scope.favFail = false;

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

  $scope.beerFave = function(beer) {
    console.log(beer)
    $http.post('/api/users/addBeer', beer).then(function success(res) {
      $location.path('');
    }, function error(res) {
      console.log(res);
      $scope.favFail = true;
    });
  }
}]);

app.controller("HomeCtrl", ["$scope", function($scope){
  $scope.elementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeIn'); // this example leverages animate.css classes
  };
   $scope.elementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeIn'); // this example leverages animate.css classes
  };
  $scope.elementIn2 = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };
   $scope.elementOut2 = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };
  $scope.animateElementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };
  $scope.animateElementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };

}]);

app.controller("AboutCtrl", ["$scope", function($scope){
   $scope.animateElementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInLeftBig'); // this example leverages animate.css classes
  };
  $scope.animateElementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInLeftBig'); // this example leverages animate.css classes
  };
  $scope.elementIn2 = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInRightBig'); // this example leverages animate.css classes
  };
   $scope.elementOut2 = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInRightBig'); // this example leverages animate.css classes
  };
}]);

app.controller('SearchBreweryCtrl', ['$scope', '$http','$rootScope', '$document', function($scope, $http, $rootScope, $document) {

  $scope.searchTerm = '';
  $scope.brewerys = [];
  $scope.favFail = false;

  $scope.search = function() {
    var req = {
      url: '/api/brewerys',
      method: 'GET',
      params: {
        q : $scope.searchTerm,
      }
    };
    $http(req).then(function success(res) {
      $scope.brewerys = res.data;
      console.log($scope.brewerys);
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

  $scope.breweryFave = function(brewery) {
    console.log(brewery)
    $http.post('/api/users/addBrewery', brewery).then(function success(res) {
      $location.path('');
    }, function error(res) {
      console.log(res);
      $scope.favFail = true;
    });
  }
}]);

app.controller("HomeCtrl", ["$scope", function($scope){
  $scope.elementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeIn'); // this example leverages animate.css classes
  };
   $scope.elementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeIn'); // this example leverages animate.css classes
  };
  $scope.elementIn2 = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInRightBig'); // this example leverages animate.css classes
  };
   $scope.elementOut2 = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInRightBig'); // this example leverages animate.css classes
  };
  $scope.elementIn3 = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };
   $scope.elementOut3 = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInDownBig'); // this example leverages animate.css classes
  };
  $scope.animateElementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInLeftBig'); // this example leverages animate.css classes
  };
  $scope.animateElementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInLeftBig'); // this example leverages animate.css classes
  };

}])

app.controller('FaveCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.userBeers = [];
  $scope.userBrewerys = [];
  $http.get('/api/users/userFaves').then(function success(res) {
    console.log(res.data.beers)
    $scope.userBeers = res.data.beers
    console.log(res.data.brewerys)
    $scope.userBrewerys = res.data.brewerys
  }, function error(res) {
    res.send(err)
  })

  $scope.removeBeer = function(id, beer) {
    console.log(beer)
    var req = {
      method: "DELETE",
      data: beer,
      url: "/api/users/removeBeer",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    };
    $http(req).then(function success(res) {
      $scope.userBeers.splice(id, 1);
    }, function error(res) {
      console.log(res);
    });
  }

  $scope.removeBrewery = function(id, brewery) {
    console.log(brewery)
    var req = {
      method: "DELETE",
      data: brewery,
      url: "/api/users/removeBrewery",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    };
    $http(req).then(function success(res) {
      $scope.userBrewerys.splice(id, 1);
    }, function error(res) {
      console.log(res);
    });
  }

   $scope.elementIn2 = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInUpBig'); // this example leverages animate.css classes
  };
   $scope.elementOut2 = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInUpBig'); // this example leverages animate.css classes
  };
  $scope.animateElementIn = function($el) {
    $el.css('visibility', 'visible');
    $el.addClass('animated fadeInUpBig'); // this example leverages animate.css classes
  };
  $scope.animateElementOut = function($el) {
    $el.css('visibility', 'hidden');
    $el.removeClass('animated fadeInUpBig'); // this example leverages animate.css classes
  };
}])

app.controller('NavCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state) {
  $scope.Auth = Auth;

  $scope.logout = function() {
    //to implement
    Auth.removeToken();
    $state.reload();
  }
}])
app.controller('SignupCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.user = {
    name: '',
    email: '',
    password: ''
  };
  $scope.userSignup = function() {

    $http.post('/api/users', $scope.user).then(function success(res) {
      $location.path('/login');
    }, function error(res) {
      console.log(res);
    });
  }
}])
app.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    //to implement
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      $location.path('/searchbeer');
    }, function error(res) {
      console.log(res);
    })
  }
}])
