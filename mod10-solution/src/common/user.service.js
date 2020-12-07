(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


//UserService.$inject = ['$http', 'ApiPath'];
function UserService() {
  var service = this;

  service.user = {
  	firstName: "",
  	lastName: "",
  	email: "",
  	phone: "",
  	favorite: "",
  	registered: false
  };
  
  service.getUserInfo = function(){
    return service.user;
  };
}


})();
