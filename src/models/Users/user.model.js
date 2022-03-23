const mongoose = require('mongoose')
const {Schema} = mongoose
const {compareSync, hashSync, genSaltSync} = require('bcrypt')

const UserSchema = new Schema ({
	password: {type: String, required:true},
	email: {type:String, required:true},
	username: {type:String, required:true},
	name: {type:String, required: true},
	country: {type:String, required: true},
	gamesCart: [{type: Array}],
	directions: [{type: Array}]
})
UserSchema.methods.toJSON = function() {
	let user = this.toObject()
	delete user.password
	return user
}
UserSchema.methods.comparePasswords = function(password) {
	return compareSync(password, this.password)
}
UserSchema.pre('save', async function(next){
	const user = this
	if(!user.isModified("password")) return next()
	const salt = genSaltSync(10);
	const hashedPassword = hashSync(user.password, salt)
	user.password = hashedPassword;
	next()
})
UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('user', UserSchema)