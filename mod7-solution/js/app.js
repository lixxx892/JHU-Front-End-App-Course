(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController', AlreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
       .filter('trippleDollar',TrippleDollarFilter);

//filter that converts a dollar sign with tripple dollar sign
function TrippleDollarFilter(){
  return function(input){
    input = input || "$";
    input = input.replace("$","$$$");
    return input;
  };
}

//service constructor function
function ShoppingListCheckOffService(){
   var service = this;

   //list of items to buy
   var toBuyItems = 
       [{name:"cookies", quantity:10, pricePerItem:0.75},
       {name:"bread", quantity:2, pricePerItem:1.25},
       {name:"milk", quantity:5, pricePerItem:3.00},
       {name:"steak", quantity:2, pricePerItem:8.50},
       {name:"apple", quantity:10, pricePerItem:0.50}
       ];
   var totalPrice = [];  
   var boughtItems = []; //list of bought items

   service.getToBuyItems = function(){
     return toBuyItems;
   };
   service.getBoughtItems = function(){
     return boughtItems;
   };
   
   //move items from toBuyItems to boughtItems
   //and calculate total price
   service.moveItems = function(itemIndex){
     var boughtItem = toBuyItems[itemIndex];
     var price = boughtItem.quantity * boughtItem.pricePerItem;
     totalPrice.push(price);
     boughtItems.push(boughtItem);
     toBuyItems.splice(itemIndex,1);
   };

   service.getTotalPrice = function(){
     return totalPrice;
   };
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];

//controller for the To Buy list
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getToBuyItems();
  list1.moveItems = function(itemIndex){
     
     ShoppingListCheckOffService.moveItems(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

//controller for the Bought List
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getBoughtItems();
  list2.totalPrice = ShoppingListCheckOffService.getTotalPrice();
}

})();
