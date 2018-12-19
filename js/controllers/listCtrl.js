angular.module('trelloApp').controller('listCtrl', function(listFactory, cardFactory) {
    this.removeList = function (list) {
        listFactory.removeList(list);
    }

    this.getCards = function (list) {
        return cardFactory.getCard(list);
    }

    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = ''
    }
});