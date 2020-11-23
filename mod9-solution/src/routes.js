(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html',
  })

  // category page
  .state('category', {
    url: '/category',
    templateUrl: 'src/templates/category.state.template.html',
    controller: 'CategoryStateCtrl as categoryCtrl'

  })
  
  //item page
  .state('item', {
    url: '/item/{shortName}',
    templateUrl: 'src/templates/item.state.template.html',
    controller: "ItemStateCtrl as itemCtrl"
  });
}

})();
