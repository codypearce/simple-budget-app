var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];
    $scope.expenseTotal = 0;

    $scope.addExpense = function(amount, type) {
      var obj = {
        amount: amount,
        type: type,
        remove: false
      };
      $scope.expenses.push(obj);
      $scope.expenseTotal = $scope.expenses.reduce((a,b) => ({amount: a.amount + b.amount}));
      $scope.amount = '';
      $scope.type = '';
      console.log($scope.expenses);
    }
    $scope.removeExpense = function(expense) {
      expense.remove = true;
      $scope.expenses = $scope.expenses.filter(a => a.remove == false);
    }
})
