const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

var referalSchema = new Schema({
	user_id : { type: Schema.ObjectId, ref: 'users' },
	afflite_id: { type: Number },
	address: { type: String },
	childs:[],
	createdAt : { type: Date, default: Date.now },
	updatedAt : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('referal', referalSchema, 'referal');
