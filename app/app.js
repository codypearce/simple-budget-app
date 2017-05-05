var app = angular.module('budgetApp', ['chart.js']);

app.controller('budgetCtrl', function($scope) {
  $scope.expenses = [];
  $scope.expenseTotal = 0;
  $scope.amounts = [];
  $scope.types = [];

  $scope.addExpense = function(amount, type) {
    if (!amount) {
      return;
    }
    var obj = {
      amount: amount,
      type: type,
      remove: false,
    };
    $scope.expenses.push(obj);
    this.updateTotal();
    this.updateChartValues();
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

  $scope.addType = function() {
    console.log('test');
  };
  $scope.updateTotal = function() {
    $scope.expenseTotal = $scope.expenses.reduce((a, b) => ({
      amount: a.amount + b.amount,
    }));
  };
  $scope.updateChartValues = function() {
    var len = $scope.expenses.length;
    if(len >= 1) {
      $scope.amounts = [];
      $scope.types = [];
      for(var i = 0; i < len; i++) {
        $scope.amounts.push($scope.expenses[i].amount);
        $scope.types.push($scope.expenses[i].type);
      }
    }
  }
});
