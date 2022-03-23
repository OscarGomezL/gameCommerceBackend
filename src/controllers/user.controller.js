let _userService = null
const {UserModel} = require('../models')

class UserController {
	constructor({UserService}) {
		_userService = UserService
	}
	async read(req,res) {
		const {userId} = req.params
		const user = await _userService.read(userId)
		return res.send(user)
	}
	async readAll(req,res) {
		const users = await _userService.readAll()
		return res.send(users)
	}
	async update(req,res) {
		const {body} = req;
		const {userId} = req.params;
		const updateUser = await _userService.update(userId,body)
		return res.send(updateUser)
	}
	async delete(req,res) {
		const {userId} = req.params;
		const deletedUser = await _userService.delete(userId)
		return res.send(deletedUser)
	}
	async getUserByEmail(req,res) {
		const {email} = req.params;
		const user = await _userService.getUserByEmail(email)
		return res.send(user)
	}
}
module.exports = UserController