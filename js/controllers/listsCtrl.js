angular.module('trelloApp').controller('listsCtrl', function (listFactory) {

  this.lists = listFactory.getLists();
  
  this.addList = function () {
    
    listFactory.addList(this.listName);
    this.listName = '';
  }
});
