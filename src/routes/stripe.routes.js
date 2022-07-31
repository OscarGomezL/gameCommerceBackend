const { Router} = require('express')

module.exports = function({StripeController}){
	const router = Router();
	router.post("/create-checkout-session", StripeController.createCheckoutSession)
	return router;
}