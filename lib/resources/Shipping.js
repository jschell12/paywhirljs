const Api = require('./Api');

module.exports = class Shipping extends Api {
	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}

	getShippingRule(shippingRule_id, cb) {
		return this.get({
			path: '/shipping/' + shippingRule_id
		}, cb);
	}
};