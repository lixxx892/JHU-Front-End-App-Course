(function () {
"use strict";

angular.module('commonTest',[])
.service('MenuServiceTest', MenuServiceTest);


MenuServiceTest.$inject = ['$http'];
function MenuServiceTest($http) {
  var service = this;
  
  service.getMenuItemsTest = function () {
    var response = $http({
      method: "GET",
      url: "https://stormy-brook-06338.herokuapp.com/menu_items.json"
    });

    return response;
  };
}


})();
