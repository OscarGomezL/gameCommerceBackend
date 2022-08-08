let _stripeService = null
let {STRIPE_KEY} = require('../config')
const stripe = require('stripe')(STRIPE_KEY)

const storeItems = new Map([
	[1, {priceInCents: 2000, name: "Dragon Ball Z: Attack of Saiyans"}],
	[2, {priceInCents: 2000, name: "Dragon Ball Z: Supersonic Warriors 2"}],
	[3, {priceInCents: 2000, name: "Kirby Super Star Ultra"}],
	[4, {priceInCents: 2000, name: "Mario & Luigi Partners in Time"}],
	[5, {priceInCents: 2000, name: "Mario Kart DS"}],
	[6, {priceInCents: 2000, name: "Pokemon Heart Gold Version"}],
	[7, {priceInCents: 2000, name: "Pokemon Black Version"}],
	[8, {priceInCents: 2000, name: "Pokemon Platinum Version"}],
	[9, {priceInCents: 2000, name: "Super Mario 64"}],
	[10, {priceInCents: 2000, name: "Pokemon White Version 2"}],
	[11, {priceInCents: 2000, name: "Dragon Ball Z Budokai Tenkaichi 3"}],
	[12, {priceInCents: 2000, name: "Wii Sports Resort"}],
	[13, {priceInCents: 2000, name: "Super Mario Galaxy"}],
	[14, {priceInCents: 2000, name: "Mario Sports Mix"}],
	[15, {priceInCents: 2000, name: "Mario Kart Wii"}],
	[16, {priceInCents: 2000, name: "Donkey Kong Country Returns"}],
	[17, {priceInCents: 2000, name: "Ben 10 Protector Of Earth"}],
	[18, {priceInCents: 2000, name: "The Legend Of Zelda Twilight Princess"}],
	[19, {priceInCents: 2000, name: "New Super Mario Bros Wii"}],
	[20, {priceInCents: 2000, name: "Lego Batman"}],
	[21, {priceInCents: 2000, name: "Call of Duty Black Ops 2"}],
	[22, {priceInCents: 2000, name: "Minecraft"}],
	[23, {priceInCents: 2000, name: "Grand theft Auto IV"}],
	[24, {priceInCents: 2000, name: "Grand Theft Auto V"}],
	[25, {priceInCents: 2000, name: "Guitar Hero 3"}],
	[26, {priceInCents: 2000, name: "Mortal Kombat 9"}],
	[27, {priceInCents: 2000, name: "Far Cry 3"}],
	[28, {priceInCents: 2000, name: "Left 4 Dead 2"}],
	[29, {priceInCents: 2000, name: "Wipeout"}],
	[30, {priceInCents: 2000, name: "Tomb Raider"}],
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
				success_url: 'http://game-commerce.vercel.app/',
				cancel_url: 'http://game-commerce.vercel.app/',
			})
			res.status(201).send(_stripeService.createCheckoutSession({url: session.url}))
		} catch (error) {
			res.status(500).send({error: error.message})
		}
	}
}
module.exports = StripeController