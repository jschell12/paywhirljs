const Api = require('./Api');

module.exports = class Emails extends Api {

	constructor(api_key, api_secret) {
		super(api_key, api_secret);
	}


	getEmailTemplate(template_id, cb) {
		return this.get({
			path: '/email/' + template_id
		}, cb);
	}
};