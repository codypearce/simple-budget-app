var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];
    $scope.addExpense = function(amount, type) {
      var obj = {
        amount: amount,
        type: type,
      };
      $scope.expenses.push(obj);
      $scope.expenseTotal = $scope.expenses.reduce((a,b) => a + b);
      $scope.amount = '';
      $scope.type = '';
      console.log($scope.expenses);
    }
})
