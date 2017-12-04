# paywhirljs

An simple wrapper for the [PayWhirl](https://app.paywhirl.com/) API.

## Installation

    npm install --save paywhirljs
    
## Description
This package is revamping/refactoring of the [nodejs PayWhirl API SDK](https://api.paywhirl.com/). The original SDK was not in the npm registry and initializing it with your api key and secret was a bit weird so I put my own here and in the [npm registry](https://www.npmjs.com/package/paywhirljs). More api documentation can be found [here](https://api.paywhirl.com/).

## Example

```javascript
const paywhirl = require('paywhirljs')({
	api_key: 'pwpk_12345678912345678912345678',
	api_secret: 'pwpk_123456789123456789123456789'
});

// Get Customer by id: 226713 
paywhirl.Customers.getCustomer(226713, (err, data) => {
	console.log(err, data.body)
});

// Get Invoices for customer_id: 226713 
paywhirl.Invoices.getInvoices(226713, (err, data) => {
	console.log(err, data.body)
});

// Get Subscriptions for customer_id: 226713 
paywhirl.Subscriptions.getSubscriptions(226713, (err, data) => {
	console.log(err, data.body)
});

paywhirl.Promo.createPromo({
	"user_id": 1,
	"code": "50OFF",
	"amount_off": 0,
	"percent_off": 100,
	"duration": "once",
	"duration_uses": 0,
	"max_redemptions": 1,
	"times_redeemed": 3,
	"is_valid": 1,
	"one_use": 1,
	"apply_to": "subtotal",
	"plans": null
}, (err, data) => {
	console.log(data.body)
	paywhirl.Promo.getPromos((err, data) => {
		console.log(err, data.body[0].id)
	});
});
```