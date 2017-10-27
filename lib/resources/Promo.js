const Api = require('./Api');

module.exports = class Promo extends Api {
	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}

	getPromos(cb) {
		return this.get({
			path: '/promo'
		}, cb);
	}

	getPromo(promo_id, cb) {
		return this.get({
			path: '/promo/' + promo_id
		}, cb);
	}


	createPromo(data, cb) {
		return this.post({
			path: '/create/promo',
			body: data
		}, cb);
	}


	deletePromo(data, cb) {
		return this.post({
			path: '/delete/promo',
			body: data
		}, cb);
	}

};