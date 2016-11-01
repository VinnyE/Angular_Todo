var app = angular.module('todoList', []);

app.controller('mainCtrl', function($scope) {

  $scope.todos = [];

  $scope.addTodo = function(todo) {
    $scope.todos.push({
      todo: todo
    });

    $scope.newTodo = '';
  }

  $scope.deleteTodo = function($index) {
    console.log('deleting:' + $index);
    $scope.todos.splice($index, 1);
  }

});
