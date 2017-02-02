pinboard.directive('posts', function(){
  return {
    templateUrl: "templates/directives/posts.html",
    scope: {
      posts: "="
    },
    restrict: "E"
  }
})
