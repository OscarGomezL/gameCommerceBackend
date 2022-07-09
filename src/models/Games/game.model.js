const mongoose = require('mongoose')
const {Schema} = mongoose

const GameSchema = new Schema(
    {
        name: {type:String},
		listNum: {type: Number},
		console: {type: String},
        description: {type:String},
		price: {type: Number},
        quantity: {type:Number},
        logo: {type:String},
    }, {timestamps: {createdAt:true, updatedAt: true}}
);
module.exports = mongoose.model('game', GameSchema)