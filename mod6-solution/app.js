(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.items = ""; //lunch items in text box
  $scope.numOfItems = 0; //number of lunch items
  $scope.message = "";  //message to display below the text box
  $scope.note = "";  //note message telling users that empty items don't count
  $scope.lunchCheck = function(){
  	$scope.numOfItems = 0; //reset the number of lunch items
  	$scope.note = "";  //reset the note message

  	//display message if user doesn't enter any data
  	if ($scope.items == "") {
  		$scope.message = "Please enter data first.";
  	}
  	else {
        //check the number of lunch items and display message
        var itemList = $scope.items.split(",");
        for (var n=0; n<itemList.length; n++){
        	var currentItem = itemList[n].trim();
        	if (currentItem != ""){
               $scope.numOfItems += 1;
        	}
        	else {
        		$scope.note = "Note: We don't count an empty item.";
        	}
        }
  	    if ($scope.numOfItems <= 3){
           $scope.message = "Enjoy!";
  	    }
  	    else {
           $scope.message = "Too much!";
  	    }
  	}
  };
});

})();
