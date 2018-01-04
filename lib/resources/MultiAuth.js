'use strict';
const Api = require('./Api');

module.exports = class MultiAuth extends Api {

	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}

	getMultiAuthToken(data, cb) {
		return this.post({
			path: '/multiauth',
			body: data
		}, cb);
	}
};