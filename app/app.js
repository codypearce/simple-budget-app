var app = angular.module('budgetApp', []);

app.controller('budgetCtrl', function($scope) {
    $scope.expenses = [];

    $scope.addExpense = function(expense) {
      console.log(expense)
      $scope.expenses.push(expense);
    }
})
