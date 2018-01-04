'use strict';
const Api = require('./Api');

module.exports = class Taxes extends Api {

	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}

	getTax(taxRule_id, cb) {
		return this.get({
			path: '/tax/' + taxRule_id
		}, cb);
	}
};