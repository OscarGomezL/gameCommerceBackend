const mongoose = require('mongoose')
const {Schema} = mongoose

const LinkSchema = new Schema(
    {
        name: {type : String},
		link: {type : String},
        logo: {type : String},
    }, {timestamps: {createdAt:true, updatedAt: true}}
);
module.exports = mongoose.model('links', LinkSchema)