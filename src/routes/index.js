const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const path = require('path')
const {NotFoundMiddleware, ErrorMiddleware} = require('../middleware')

require('express-async-errors')
module.exports = function({TestRoute, GameRoutes, UserRoutes, LinkRoutes, StripeRoutes}) {
	const router = express.Router();
	const apiRoutes = express.Router()
	apiRoutes
		.use(express.json())
		.use(cors())
		.use('*/xbox360GamesImages', express.static(path.join(__dirname, '/../public/xbox')))
		.use('*/wiiGamesImages', express.static(path.join(__dirname, '/../public/wii')))
		.use('*/dsGamesImages', express.static(path.join(__dirname, '/../public/ds')))
		.use('*/slidesImages', express.static(path.join(__dirname, '/../public/slides')))
		.use(helmet())
		.use(compression())
	apiRoutes.use("/test",TestRoute)
	apiRoutes.use("/games",GameRoutes)
	apiRoutes.use("/user",UserRoutes)
	apiRoutes.use("/link",LinkRoutes)
	apiRoutes.use("/stripe",StripeRoutes)
	router.use("/v1", apiRoutes)
	router.use(NotFoundMiddleware)
	router.use(ErrorMiddleware)
	return router
}