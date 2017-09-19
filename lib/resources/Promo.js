const Api = require('./Api');

module.exports = class Promo extends Api {
	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}

	getPromo(promo_id, cb) {
		return this.get({
			path: '/promo/' + promo_id
		}, cb);
	}

};