(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
     var promise = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
     return promise;    
  };

  service.getItemsForCategory = function (shortName) {
     var promise = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        params:{
        	category:shortName
        }
      });
     return promise;    
  };

}

})();
