const {createContainer, asClass, asValue, asFunction} = require('awilix')
//config
const config = require('../config')
const app = require('./app.js')
const Routes = require('../routes')
//services
const {TestService, GameService, UserService, AuthService, LinkService} = require('../services')
//controllers
const {TestController, GameController, UserController, AuthController, LinkController} = require('../controllers')
//routes
const {TestRoute, GameRoutes, UserRoutes, LinkRoutes} = require('../routes/index.routes')
//models
const {UserModel, LinkModel} = require('../models')
//repositories
const {UserRepository, LinkRepository} = require('../repositories')

const container = createContainer()
container
.register({
	app: asClass(app).singleton(),
	router: asFunction(Routes).singleton(), 
	config: asValue(config),
})
.register({
	TestService : asClass(TestService).singleton(),
	GameService : asClass(GameService).singleton(),
	UserService : asClass(UserService).singleton(),
	AuthService : asClass(AuthService).singleton(),
	LinkService : asClass(LinkService).singleton(),
})
.register({
	TestController: asClass(TestController.bind(TestController)).singleton(),
	GameController: asClass(GameController.bind(GameController)).singleton(),
	UserController: asClass(UserController.bind(UserController)).singleton(),
	AuthController: asClass(AuthController.bind(AuthController)).singleton(),
	LinkController: asClass(LinkController.bind(LinkController)).singleton(),
})
.register({
	TestRoute : asFunction(TestRoute).singleton(),
	GameRoutes : asFunction(GameRoutes).singleton(),
	UserRoutes : asFunction(UserRoutes).singleton(),
	LinkRoutes : asFunction(LinkRoutes).singleton(),
})
.register({
	User: asValue(UserModel),
	Link: asValue(LinkModel),
})
.register({
	UserRepository: asClass(UserRepository).singleton(),
	LinkRepository: asClass(LinkRepository).singleton(),
})

module.exports = container