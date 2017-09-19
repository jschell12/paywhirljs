const Api = require('./Api');

module.exports = class Invoices extends Api {

    constructor(api_key, api_secret) {
        super(api_key, api_secret);
    }

    getInvoices(cust_id, cb) {
        return this.get({
            path: '/invoices/' + cust_id
        }, cb);
    }


    getInvoice(invoice_id, cb) {
        return this.get({
            path: '/invoice/' + invoice_id
        }, cb);
    }

};