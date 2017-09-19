const request = require('request');


module.exports = class Api {

	constructor(api_key, api_secret) {


		this.protocol = 'https';
		this.host = 'api.paywhirl.com';
		this.port = 443;
		this.api_key = api_key;
		this.api_secret = api_secret;
	}

	get(options, callback) {
		options.url = this.protocol + '://' + this.host + options.path;
		options.method = 'GET';
		options.headers = {};
		options.headers["Content-type"] = "application/json";
		options.headers["api_key"] = this.api_key;
		options.headers["api_secret"] = this.api_secret;
		options.body = JSON.stringify(options.body);
		request(options, (err, res, body) => {

			if (err) return callback(err);
			res.body = JSON.parse(body);
			return callback(null, res);
		});
	}

	post(options, callback) {
		options.url = this.protocol + '://' + this.host + options.path;
		options.method = 'POST';
		options.headers = {};
		options.headers["Content-type"] = "application/json";
		options.headers["api_key"] = this.api_key;
		options.headers["api_secret"] = this.api_secret;
		options.body = JSON.stringify(options.body);
		request(options, (err, res, body) => {

			if (err) return callback(err);

			res.body = JSON.parse(body);
			return callback(null, res);
		});
	}



};