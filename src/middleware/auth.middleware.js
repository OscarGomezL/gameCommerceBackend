const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
module.exports = function(req,res,next) {
	const token = req.headers["authorization"]
	if(!token) {
		const e = new Error()
		e.message = "Token Must Be Sent"
		e.status = 400
	}
	jwt.verify(token, JWT_SECRET, function(err,decodedToken) {
		if(err) {
			const e = new Error()
			e.message = "Invalid Token"
			e.status = 401
			throw e
		}
		req.user = decodedToken.user
		next()
	})
}