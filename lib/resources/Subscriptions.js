const Api = require('./Api');

module.exports = class Subscriptions extends Api {


    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getSubscriptions(cust_id, cb) {
        return this.get({
            path: '/subscriptions/' + cust_id
        }, cb);
    }

    getSubscription(subscription_id, cb) {
        return this.get({
            path: '/subscription/' + subscription_id
        }, cb);
    }

    subscribeCustomer(data, cb) {
        return this.post({
            path: '/subscribe/customer',
            body: data
        }, cb);
    }

    updateSubscription(subscription_id, data, cb) {
        data.id = subscription_id;
        return this.post({
            path: '/update/customer',
            body: data
        }, cb);
    }

    unsubscribeCustomer(subscription_id, cb) {
        data.id = subscription_id;
        data.subscription_id = subscrsription_id;
        return this.post({
            path: '/unsubscribe/customer',
            body: data
        }, cb);
    }

    getSubscribers(data, cb) {
        return this.get({
            path: '/subscribers/',
            body: data
        }, cb)
    }
};