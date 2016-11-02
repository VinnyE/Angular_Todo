webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var app = angular.module('todoList', []);

	__webpack_require__(3);
	__webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	angular.module('todoList')
	  .directive('todos', function() {
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


/***/ }
]);