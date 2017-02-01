pinboard.directive('postsDirective', function(){
  return {
    templateUrl: "template/posts.html",
    scope: {
      posts: "="
    },
    restrict: "E"
  }
})