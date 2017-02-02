pinboard.controller("PostIndexController",[
  "$scope", "Restangular", function($scope, Restangular){
    Restangular.all("posts").getList()
      .then(result => $scope.posts = result)

    $scope.submitPost = (valid, post, form) => {
      Restangular.all("posts").post({"post": post})
        .then((post) => $scope.posts.push(post))
    }
  }
])
