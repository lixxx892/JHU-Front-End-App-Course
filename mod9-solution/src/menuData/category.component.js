(function () {
'use strict';

angular.module('Data')
.component('listCategory', {
  templateUrl: 'src/templates/category.component.template.html',
  bindings: {
    categories: '<'
  }
});

})();
