const { Router} = require('express')

module.exports = function({WorkController}){
	const router = Router();
	router.get("/", WorkController.readAll)
	return router;
}