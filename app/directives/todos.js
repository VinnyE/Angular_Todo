app.directive('todos', function() {
  return {
    templateUrl: 'app/views/todos.html',
    restrict: 'A'
  };
});

// autofocus on edit input
app.directive('focus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, $element) {
        $element[0].focus();
    }
  };
}]);
