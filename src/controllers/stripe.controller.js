let _stripeService = null
let {STRIPE_KEY} = require('../config')
const stripe = require('stripe')(STRIPE_KEY)

const storeItems = new Map([
	[1, {priceInCents: 2000, name: "Example 1"}],
	[2, {priceInCents: 3000, name: "Example 2"}]
])
class StripeController {
	constructor({StripeService}){
		_stripeService= StripeService
	}
	async createCheckoutSession(req,res) {
		try {
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				mode: 'payment',
				line_items: req.body.items.map(item=>{
					const storeItem = storeItems.get(item.id)
					return {
						price_data : {
							currency: "usd",
							product_data : {
								name: storeItem.name
							},
							unit_amount: storeItem.priceInCents 
						},
						quantity: item.quantity,
					} 
				}),
				success_url: 'http://localhost:3000/directions',
				cancel_url: 'http://localhost:3000/cart',
			})
			res.status(201).send(_stripeService.createCheckoutSession({url: session.url}))
		} catch (error) {
			res.status(500).send({error: error.message})
		}
	}
}
module.exports = StripeController