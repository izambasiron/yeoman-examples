'use strict';

angular.module('angularAppengineEndpointsPythonTodosApp')
  .factory('Todo', function($resource) {
    var Todo = $resource('/_ah/api/todo/v1/todos/:id', {id: '@id'}, {
      query: {method: 'GET', isArray: false},
      update: {method: 'PUT'}
    });
    return Todo;
  })
  .controller('MainCtrl', function($scope, Todo) {
    Todo.query(function(response) {
      $scope.todos = [];
      angular.forEach(response.items, function(item) {
        var todo = new Todo();
        todo.text = item.text;
        todo.done = item.done;
        todo.id = item.id;
        $scope.todos.push(todo);
      });
    });

    $scope.addTodo = function() {
      var todo = new Todo();
      todo.text = $scope.todoText;
      todo.done = false;
      todo.$save();
      $scope.todos.push(todo);
      $scope.todoText = '';
    };

    $scope.change = function(todo) {
      todo.$update();
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      $scope.todos = $scope.todos.filter(function(todo) {
        return !todo.done;
      });
    };

  });
