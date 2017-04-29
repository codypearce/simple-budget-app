var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];
    $scope.expenseTotal = 0;

    $scope.addExpense = function(amount, type) {
      var obj = {
        amount: amount,
        type: type,
      };
      $scope.expenses.push(obj);
      $scope.expenseTotal = $scope.expenses.reduce((a,b) => ({amount: a.amount + b.amount}));
      $scope.amount = '';
      $scope.type = '';
      console.log($scope.expenses);
    }
    $scope.removeExpense = function(idx) {
      $scope.expenses.slice(idx, 1);
    }
})
