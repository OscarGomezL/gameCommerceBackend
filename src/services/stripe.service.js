class StripeService {
	createCheckoutSession(body) {
		return {
			url: body.url
		}
	}
}

module.exports = StripeService