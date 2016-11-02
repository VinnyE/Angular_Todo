var angular = require('angular');

angular.module('todoList')
  .controller('mainCtrl', ['$scope', function($scope) {

  $scope.todos = [];

  $scope.addTodo = function(todo) {
    $scope.todos.push({
      name: todo,
      completed: false
    });

    $scope.newTodo = '';
  };

  $scope.deleteTodo = function($index) {
    $scope.todos.splice($index, 1);
  };

  $scope.clearCompletedTodo = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      return todo.completed !== true;
    });
  };
}]);
