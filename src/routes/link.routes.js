const { Router} = require('express')

module.exports = function({ LinkController}){
	const router = Router();
	router.get("/read/id/:userId", LinkController.read)
	router.get("/read/title/:title", LinkController.getLinkByTitle)
	router.get("/readAll", LinkController.readAll)
	router.post("/create", LinkController.create)
	router.patch("/update/:userId", LinkController.update)
	router.delete("/delete/:userId", LinkController.delete)
	return router;
}