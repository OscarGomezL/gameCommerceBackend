const { Router} = require('express')

module.exports = function({TestController}){
	const router = Router();
	router.get("/", TestController.index)
	return router;
}