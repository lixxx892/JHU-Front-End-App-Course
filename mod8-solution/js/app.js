(function () {
'use strict';

angular.module('NarrowItDownApp', [])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'https://lixxx892.github.io/JHU-Front-End-App-Course/mod8-solution/menuItemList.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
  };

  return ddo;
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
   var service = this;

   service.getPromise = function(){
      var promise = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
      return promise;     
   };

   service.getMatchedMenuItems = function(items,searchTerm){
     var foundItems = [];
     for (var i=0; i<items.length; i++) {
       var description = items[i].description;
       if (description.indexOf(searchTerm) !== -1){
         foundItems.push(items[i]);
       }
     }
     return foundItems;
   };

}


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.found = [];

  ctrl.getMatchedMenuItems = function(){
    var promise = MenuSearchService.getPromise();
    promise.then(function (response) {
        var returnedResult = response.data;
        var allItems = returnedResult.menu_items;
        console.log(ctrl.search);
        ctrl.found = MenuSearchService.getMatchedMenuItems(allItems,ctrl.search);
        if (ctrl.found.length == 0) {
          ctrl.message = "Nothing Found.";
        }
        else {
          ctrl.message = "";
        }
      })
      .catch(function (error) {
        console.log("Error message: " + error);
      });
    
  };//end of getMatchedMenuItems

  ctrl.removeItem = function(index){
    ctrl.found.splice(index, 1);
  };
  
}//end of controller

})();
