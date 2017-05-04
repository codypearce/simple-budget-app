var app = angular.module('budgetApp', ['chart.js']);

app.controller('budgetCtrl', function($scope) {
  $scope.expenses = [];
  $scope.types = [];
  $scope.expenseTotal = 0;

  $scope.addExpense = function(amount, type) {
    if (!amount) {
      return;
    }
    $scope.expenses.push(amount);
    $scope.types.push(type);
    this.updateTotal();
    $scope.amount = '';
    $scope.type = '';
  };
  $scope.removeExpense = function(expense) {
    expense.remove = true;
    $scope.expenses = $scope.expenses.filter(a => a.remove == false);
    if ($scope.expenses.length === 0) {
      $scope.expenseTotal = 0;
    } else {
      this.updateTotal();
    }
  };
  $scope.updateTotal = function() {
    $scope.expenseTotal = $scope.expenses.reduce((a, b) => a + b);
  };
});
