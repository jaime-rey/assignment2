(() => {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingService", ShoppingService);

  function ShoppingService() {
    let service = this;
    service.toBuyList = [
      { name: "Milk", quantity: 1 },
      { name: "Bread", quantity: 21 },
      { name: "Cheese", quantity: 10 },
      { name: "Butter", quantity: 1 },
      { name: "Yogurt", quantity: 15 },
    ];
    service.boughtList = [];

    service.buy = (index) => {
      console.log("Buying " + service.toBuyList[index].name);
      service.boughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index, 1);
    };
    //Still in progress
    service.toBuyEmpty = service.toBuyList == [];
    service.boughtEmpty = service.boughtList == [];

    service.fetchToBuy = () => {
      return service.toBuyList;
    };

    service.fetchBought = () => {
      return service.boughtList;
    };
  }

  ToBuyController.inject = ["ShoppingService"];
  function ToBuyController(ShoppingService) {
    let toBuyAdder = this;

    toBuyAdder.toBuyList = ShoppingService.toBuyList;

    toBuyAdder.buy = ShoppingService.buy;
  }
  AlreadyBoughtController.inject = ["ShoppingService"];
  function AlreadyBoughtController(ShoppingService) {
    let boughtAdder = this;

    boughtAdder.boughtList = ShoppingService.boughtList;
  }
})();
