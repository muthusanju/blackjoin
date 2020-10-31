const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

var transactionSchema = new Schema({
  from           	  : { type: String, default: '' },
  to              	  : { type: String, default: '' },
  level               : { type: Number, default: 0 },
  transactionId       : { type: String, default: '' },
  pay_status          : { type: Boolean, default: false },
  createdAt           : { type: Date, default: Date.now },
  updatedAt           : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('transaction_status', transactionSchema, 'transaction_status');

