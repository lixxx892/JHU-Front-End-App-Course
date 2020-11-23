(function () {
'use strict';

angular.module('Data')
       .controller('CategoryStateCtrl', CategoryStateCtrl);


CategoryStateCtrl.$inject = ['MenuDataService'];
function CategoryStateCtrl(MenuDataService) {
  var categoryCtrl = this;

  categoryCtrl.$onInit = function(){
    var promise = MenuDataService.getAllCategories();
    promise.then(function(result){
    	categoryCtrl.categories = result.data;
    });
  };
}

})();
