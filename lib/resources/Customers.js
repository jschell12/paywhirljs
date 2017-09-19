const Api = require('./Api');

module.exports = class Customers extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getCustomers(data, cb) {
        return this.get({
            path: '/customers',
            body: data
        }, cb);
    }

    getCustomer(cust_id, cb) {
        return this.get({
            path: '/customer/' + cust_id
        }, cb);
    }

    createCustomer(data, cb) {
        return this.post({
            path: '/create/customer' + cust_id
        }, cb);
    }

    updateCustomer(cust_id, data, cb) {
        data.id = cust_id;

        this.post({
            path: '/update/customer',
            body: data
        }, cb);
    }

    getQuestions(data, cb) {
        return this.get({
            path: '/questions',
            body: data
        }, cb);
    }

    updateAnswer(data, cb) {
        return this.post({
            path: '/update/answer',
            body: data
        }, cb);
    }

    getAnswers(cust_id, cb) {
        return this.get({
            path: '/answers/' + cust_id
        }, cb);
    }
};