(function () {
'use strict';

angular.module('Data')
.component('listItem', {
  templateUrl: 'src/templates/item.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
