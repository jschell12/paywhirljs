const Api = require('./Api');

module.exports = class Cards extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getCards(cust_id, cb) {
        return this.get({
            path: '/cards/' + cust_id
        }, cb);
    }

    getCard(card_id, cb) {
        return this.get({
            path: '/card/' + card_id
        }, cb);
    }

    createCard(data, cb) {
        return this.post({
            path: '/create/card/',
            body: data
        }, cb);
    }

    deleteCard(card_id, cb) {
        let data = {
            "id": card_id
        };

        return this.post({
            path: '/delete/card/',
            body: data
        }, cb);
    }

};