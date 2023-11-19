(() => {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("MainController", MainController)
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController);

  MainController.inject = ["$scope"];
  function MainController($scope) {
    $scope.main.toBuy = [
      { name: "Milk", quantity: 1 },
      { name: "Bread", quantity: 21 },
      { name: "Cheese", quantity: 10 },
      { name: "Butter", quantity: 1 },
      { name: "Yogurt", quantity: 15 },
    ];

    $scope.main.bought = [];
  }

  ToBuyController.inject = ["$scope"];
  function ToBuyController($scope) {
    $scope.toBuy = $scope.main.toBuy;
    $scope.bought = $scope.main.bought;
    $scope.buy = function (index) {
      console.log("Buying " + $scope.toBuy[index].name);
      $scope.bought.push($scope.toBuy[index]);
      $scope.toBuy.splice(index, 1);
    };
  }
  AlreadyBoughtController.inject = ["$scope"];
  function AlreadyBoughtController($scope) {
    $scope.bought = $scope.main.bought;
  }
})();
