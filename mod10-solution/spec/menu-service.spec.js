describe('menuservice_test', function () {

  var menuService;
  var $httpBackend;
  var favoriteItem;

  beforeEach(function () {
    module('commonTest');

    inject(function ($injector) {
      menuService = $injector.get('MenuServiceTest');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  beforeEach(function (){
     //user's favorite menu item
     favoriteItem = 'A1';

  });

  it('should find favorite item in menu', function() {
    $httpBackend.whenGET('https://stormy-brook-06338.herokuapp.com/menu_items.json').respond(['A1', 'A2', 'A3','A4','A5','A6','A7','A8','A9']);
    menuService.getMenuItemsTest().then(function(response) {
      var items = response.data;
      var foundItemInMenu = false;
      var i = 0;
      for (;i<items.length; i++){
        if (items[i]==favoriteItem){
          foundItemInMenu=true;
        }
      }
      expect(foundItemInMenu).toBe(true);
    });
    $httpBackend.flush();
  });

});
