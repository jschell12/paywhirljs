'use strict';
const Api = require('./Api');

module.exports = class Gateways extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getGateways(cb) {
        return this.get({
            path: '/gateways'
        }, cb);
    }

    getGateway(gateway_id, cb) {
        return this.get({
            path: '/gateway/' + gateway_id
        }, cb);
    }
};