angular.module('trelloApp').factory('listFactory', function () {
  var service = {};

  var lists = [
    {
      id: 1,
      listName: 'Todo'
    },
    {
      id: 2,
      listName: 'Doing'
    },
    {
      id: 3,
      listName: 'Done'
    }
  ];

  service.getLists = function () {
    return lists;
  };

  service.addList = function (listName) {
    lists.push({
      id: _.uniqueId('list_'),
      listName
    })
  }

  service.removeList = function (list) {
/*     const newLists = lists.filter(l => l.id !== list.id);
    console.log(newLists)
    this.lists = newLists; */
    _.pull(lists, list)
  }

  return service;
});
