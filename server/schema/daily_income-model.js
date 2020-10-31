const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

var daily_incomeSchema = new Schema({
  user_id : { type: Schema.ObjectId, ref: 'users' },
  amount              : { type: Number, default: 0 },
  createdAt           : { type: Date, default: Date.now },
  updatedAt           : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('daily_income', daily_incomeSchema, 'daily_income');

