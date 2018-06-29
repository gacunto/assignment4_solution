(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items'];
  function CategoryItemsController(items) {
    var categoryItems = this;
    categoryItems.items = items.data;
    console.error(categoryItems.items);
    console.error(categoryItems.items.menu_items);
    console.error(categoryItems.items.category);
  }

})();
