if(process.env.NODE_ENV !== "production"){
	require('dotenv').config({path: require('find-config')('.env')});
}module.exports = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
	APPLICATION_NAME: process.env.APPLICATION_NAME,
	JWT_SECRET: process.env.JWT_SECRET,
	STRIPE_KEY: process.env.STRIPE_KEY,
}