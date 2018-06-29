(function () {
  'use strict';

  angular.module('data')
  .constant('MenuCategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
  .constant('CategoryItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http', 'MenuCategoriesPath', 'CategoryItemsPath'];
  function MenuDataService($http, MenuCategoriesPath, CategoryItemsPath) {
    var service = this;

    // List of category items
    var categories = [];

    // functions
    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (MenuCategoriesPath)
      });

      return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: CategoryItemsPath,
        params: {
          category: categoryShortName
        }
      });

      return response;
    };
  }

})();
