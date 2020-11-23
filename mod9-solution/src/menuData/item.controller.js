(function () {
'use strict';

angular.module('Data')
       .controller('ItemStateCtrl', ItemStateCtrl);


ItemStateCtrl.$inject = ['MenuDataService','$stateParams'];
function ItemStateCtrl(MenuDataService,$stateParams) {
  var itemCtrl = this;

  itemCtrl.$onInit = function(){
    var promise = MenuDataService.getItemsForCategory($stateParams.shortName);
    promise.then(function(result){
    	var returnedObj = result.data;
    	itemCtrl.items = returnedObj.menu_items;
    });
  };
}

})();
