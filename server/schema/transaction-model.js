const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

var transactionSchema = new Schema({
  from           	  : { type: String, default: '' },
  to              	  : { type: String, default: '' },
  afflite_id          : { type: Number, default: '' },
  level       		  : { type: Number, default: 0 },
  level_price         : { type: Number, default: 0 },
  pool_price          : { type: Number, default: 0 },
  transactionId       : { type: String, default: '' },
  pay_status          : { type: Boolean, default: false },
  createdAt           : { type: Date, default: Date.now },
  updatedAt           : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('transaction', transactionSchema, 'transaction');

