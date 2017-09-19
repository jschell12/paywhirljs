const Api = require('./Api');

module.exports = class Charges extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    createCharge(data, cb) {
        return this.post({
            path: '/create/charge/',
            body: data
        }, cb);
    }

    getCharge(charge_id, cb) {
        return this.get({
            path: '/charge/' + charge_id
        }, cb);
    }
};