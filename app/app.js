var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];
    $scope.addExpense = function(expense, type) {
      var obj = {
        expense: expense,
        type: type,
      };
      $scope.expenses.push(obj);
      $scope.expenseTotal = $scope.expenses.reduce((a,b) => a + b);
      $scope.expense = '';
      console.log($scope.expenses);
    }
})
