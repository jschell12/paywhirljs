'use strict';
const Api = require('./Api');

module.exports = class Plans extends Api {


    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getPlans(data, cb) {
        return this.get({
            path: '/plans',
            body: data
        }, cb);
    }

    getPlan(plan_id, cb) {
        return this.get({
            path: '/plan/' + plan_id
        }, cb);
    }

    createPlan(data, cb) {
        return this.post({
            path: '/create/plan/',
            body: data
        }, cb);
    }

    updatePlan(data, cb) {
        return this.post({
            path: '/update/plan/',
            body: data
        }, cb);
    }

};