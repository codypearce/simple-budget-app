var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];
    $scope.expenseTotal = 0;

    $scope.addExpense = function(amount, type) {
      if(!amount) {
        return;
      }
      var obj = {
        amount: amount,
        type: type,
        remove: false
      };
      $scope.expenses.push(obj);
      this.updateTotal();
      $scope.amount = '';
      $scope.type = '';
    }
    $scope.removeExpense = function(expense) {
      expense.remove = true;
      $scope.expenses = $scope.expenses.filter(a => a.remove == false);
      if($scope.expenses.length === 0) {
        $scope.expenseTotal = 0;
      } else {
        this.updateTotal();
      }
    }
    $scope.updateTotal = function() {
      $scope.expenseTotal = $scope.expenses.reduce((a,b) => ({amount: a.amount + b.amount}));
    }
})
