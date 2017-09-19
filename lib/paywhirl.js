'use strict';

const exec = require('child_process').exec;
const Account = require('./resources/Account');
const Cards = require('./resources/Cards');
const Charges = require('./resources/Charges');
const Customers = require('./resources/Customers');
const Emails = require('./resources/Emails');
const Gateways = require('./resources/Gateways');
const Invoices = require('./resources/Invoices');
const MultiAuth = require('./resources/MultiAuth');
const Plans = require('./resources/Plans');
const Promo = require('./resources/Promo');
const Shipping = require('./resources/Shipping');
const Subscriptions = require('./resources/Subscriptions');
const Taxes = require('./resources/Taxes');



let PayWhirl = class PayWhirl {
    constructor(options) {

        let api_key = options.api_key || null;
        let api_secret = options.api_secret || null;


        this.Account = new Account(api_key, api_secret);
        this.Cards = new Cards(api_key, api_secret);
        this.Charges = new Charges(api_key, api_secret);

        this.Customers = new Customers(api_key, api_secret);
        this.Emails = new Emails(api_key, api_secret);
        this.Gateways = new Gateways(api_key, api_secret);
        this.Invoices = new Invoices(api_key, api_secret);
        this.MultiAuth = new MultiAuth(api_key, api_secret);
        this.Plans = new Plans(api_key, api_secret);
        this.Promo = new Promo(api_key, api_secret);
        this.Shipping = new Shipping(api_key, api_secret);
        this.Subscriptions = new Subscriptions(api_key, api_secret);
        this.Taxes = new Taxes(api_key, api_secret);
    }

};

module.exports = function(options) {
    return new PayWhirl(options);
};