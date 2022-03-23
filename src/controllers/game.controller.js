let _gameService = null
const {GameModel} = require('../models')

class GameController {
	constructor({GameService}){
		_gameService= GameService
	}
	async games(req,res) {
		let games = await GameModel.find()
		games.map(game=>{
			game.logo = `${req.protocol}://${req.headers.host}/v1/${game.console}GamesImages/${game.logo}` 
			return game
		})
		return res.send(_gameService.index(games))
	}
}
module.exports = GameController