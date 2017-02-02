pinboard = angular.module("pinboard",["ui.router", "Devise", "restangular"])
.constant("_", window._);


pinboard.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

pinboard.config([
    'RestangularProvider',
    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          "content-type": "application/json"
      });
    }
]);

pinboard.config([
  'AuthProvider',
  function(AuthProvider) {
    AuthProvider.loginPath('/api/v1/user/sign_in.json');
    AuthProvider.loginMethod('POST');
    AuthProvider.resourceName('users');
  }
]);

pinboard.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('posts', {
      url:'/',
      abstract: true,
      views: {
        '':{
          template: '<ui-view></ui-view>'
        }
      }
    }).state('posts.index', {
      url:'',
      views: {
        '':{
          templateUrl: 'templates/posts/index.html',
          controller: 'PostIndexController'
        }
      }
    })
  }
])
