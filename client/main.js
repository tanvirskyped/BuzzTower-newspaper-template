var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html'
    })
    // .when('/postNews', {
    //   templateUrl: 'partials/postNews.html'
    // })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    
    .otherwise({redirectTo: '/'});
});

myApp.controller('mainCtrl', function($scope, $log, $window) {
    $scope.toggled = function(open) {
            // $log.log('Dropdown is now: ', open);
          };


});


// myApp.run(restricted, function ($rootScope, $location, $route, AuthService, restricted) {
//   $rootScope.$on('$routeChangeStart', function (event, next, current) {
//     if (next.access.restricted && AuthService.isLoggedIn() === false) {
//       $location.path('/login');
//     }
//   });
// });
