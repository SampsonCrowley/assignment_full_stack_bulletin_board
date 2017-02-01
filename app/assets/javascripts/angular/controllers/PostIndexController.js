pinboard.controller("PostIndexController",[ 
  "$scope", "Restangular", function($scope, Restangular){
    Restangular.all("posts").getList().then(
      (result) => { $scope.posts = result } 
      )
  }
])