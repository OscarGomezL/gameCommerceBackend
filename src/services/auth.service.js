const { generateToken} = require('../helpers/jwt.helper')
let _userService = null
class AuthService {
	constructor({UserService}){
		_userService = UserService
	}
	async signUp(user) {
		const {email} = user;
		const userExist = await _userService.getUserByEmail(email)
		if(userExist) {
			let e = new Error()
			e.message = "This Email is already registered"
			e.status = 401
			throw e
		}
		return await _userService.create(user)
	}
	async signIn(user) {
		const {email,password} = user
		const userExist = await _userService.getUserByEmail(email)
		if(!userExist) {
			let e = new Error()
			e.message = "This Email isn't registered yet"
			e.status = 404
			throw e
		}
		const validPassword = userExist.comparePasswords(password)
		if(!validPassword) {
			let e = new Error()
			e.message = "Invalid password"
			e.status = 400
			throw e
		}
		const userToEncode = {
			email: userExist.email,
			username: userExist.username,
			name: userExist.name,
			country: userExist.country,
			id: userExist._id,
			gamesCart: userExist.gamesCart,
			directions: userExist.directions,
		}
		const token = generateToken(userToEncode)
		return {token, user: userExist}
	}
}
module.exports = AuthService