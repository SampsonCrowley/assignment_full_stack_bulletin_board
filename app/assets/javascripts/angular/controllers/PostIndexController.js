pinboard.controller("PostIndexController",[
  "$scope", "Restangular", function($scope, Restangular){
    Restangular.all("posts").getList()
      .then(result => $scope.posts)

    $scope.submitPost = (valid, post, form) => {
      Restangular.all("posts").post({post})
        .then((post) => $scope.posts.push(post))
    }
  }
])
