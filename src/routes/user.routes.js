const { Router} = require('express')

module.exports = function({ AuthController, UserController}){
	const router = Router();
	router.post("/signin", AuthController.signIn)
	router.post("/signup", AuthController.signUp)
	router.get("/read/id/:userId", UserController.read)
	router.get("/read/email/:email", UserController.getUserByEmail)
	router.get("/readAll", UserController.readAll)
	router.patch("/update/:userId", UserController.update)
	router.delete("/delete/:userId", UserController.delete)
	return router;
}