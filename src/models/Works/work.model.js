const mongoose = require('mongoose')
const {Schema} = mongoose

const WorkSchema = new Schema(
    {
        business: {type : String},
        position: {type : String},
		link: {type : String},
    }, {timestamps: {createdAt:true, updatedAt: true}}
);
module.exports = mongoose.model('works', WorkSchema)