const { Router} = require('express')

module.exports = function({GameController}){
	const router = Router();
	router.get("/", GameController.games)
	return router;
}