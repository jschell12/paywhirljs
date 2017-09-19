/**
 * Created by RWReynolds on 6/22/2017.
 */
//'use strict';
var https = require('https');
var querystring = require('querystring');


var utils = module.exports = {

    pwGET: function(options, cb) {
        console.log("ASDF", options)
        https.get(options, (res) => {
            const statusCode = res.statusCode;
            const contentType = res.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed.\n` +
                    `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error(`Invalid content-type.\n` +
                    `Expected application/json but received ${contentType}`);
            }
            if (error) {
                console.log(error.message);
                // consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => rawData += chunk);
            res.on('end', () => {
                try {
                    let parsedData = JSON.parse(rawData);
                    //console.log(parsedData);
                    cb(error, parsedData);
                } catch (e) {
                    console.log(e.message);
                }
            });
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
        })
    },

    pwPOST: function(options, data, cb) {

        var postData = JSON.stringify(data);
        console.log("Options: ", options);
        console.log("PostData: ", postData);

        var req = https.request(options, (res) => {
            console.log('STATUS:', res.statusCode);
            console.log('HEADERS:', JSON.stringify(res.headers));

            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                console.log('BODY:', chunk);
            });

            res.on('end', function() {
                console.log('No more data in response.');
            });
        });

        req.on('error', function(e) {
            console.log('Problem with request:', e.message);
        });

        console.log("PostData: ", postData);
        req.write(postData);
        req.end();
    }

};