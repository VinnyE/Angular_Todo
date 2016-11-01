app.controller('mainCtrl', function($scope) {

  $scope.todos = [];

  $scope.addTodo = function(todo) {
    $scope.todos.push({
      name: todo
    });

    $scope.newTodo = '';
  }

  $scope.deleteTodo = function($index) {
    console.log('deleting:' + $index);
    $scope.todos.splice($index, 1);
  }
});
