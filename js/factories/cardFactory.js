angular.module('trelloApp').factory('cardFactory', function() {
    const service = {};

    const cards = [
        {
            id: 1,
            description: 'Fix bug in player',
            list_id: 1  
        },
        {
            id: 2,
            description: 'Add feature',
            list_id: 2 
        },
        {
            id: 3,
            description: 'Learn JS',
            list_id: 3
        }
    ]

    service.getCard = function (list) {
        return _.filter(cards, {list_id: list.id})
    }

    service.createCard = function (list, cardDescription) {
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            list_id: list.id
        })
    }
    
    service.deleteCard = function (card) {
        return _.pull(cards, card)
    }

    service.updateCard = function (updaitedCard) {
        var card = _.findWhere(cards, { id: updaitedCard.id});
        card.description = updaitedCard.description;
        card.list_id = updaitedCard.list_id;
    }

    return service
})