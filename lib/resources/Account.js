const Api = require('./Api');

module.exports = class Account extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getAccount(cb) {
        return this.get({
            path: '/account'
        }, cb);
    }

    getStats(cb) {
        return this.get({
            path: '/stats'
        }, cb);
    }
};