(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['allMenuItems','UserService'];
function SignupController(allMenuItems,UserService) {
  var $ctrl = this;
  $ctrl.allMenuItems = allMenuItems.menu_items;
  $ctrl.menuItem = {};
  $ctrl.user = {
  	firstName: "",
  	lastName: "",
  	email: "",
  	phone: "",
  	favorite: "",
  	dishName:"",
  	dishDesc:"",
  	registered: false
  };
  
  $ctrl.submit = function(){
  	//retrieve user's favorite menu item
  	 var items = $ctrl.allMenuItems;
  	 var i = 0;
  	 var item = {};
     for (; i < items.length; i++) {
     	item = items[i];
     	if (item.short_name == $ctrl.user.favorite) {
     		$ctrl.menuItem = item;
     		break;
     	}
     }
     //specify that the user has registered
     $ctrl.user.registered = true;

     //save user's favorite dish information
     $ctrl.user.dishName = $ctrl.menuItem.name;
     $ctrl.user.dishDesc = $ctrl.menuItem.description;

    //save user's info to UserService
    UserService.user = $ctrl.user;
    $ctrl.message = "Your information has been saved.";
  };

  
}


})();
