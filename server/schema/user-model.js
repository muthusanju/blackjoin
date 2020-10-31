const mongoose   = require('mongoose');
const jwt        = require('jsonwebtoken');
const Schema     = mongoose.Schema;

var userSchema = new Schema({
  username           : { type: String, default: '' },
  email              : { type: String, default: '' },
  password           : { type: String, default: '' },
  amount             : { type: Number, default: '' },
  address            : { type: String, default: '' },
  address            : { type: String, default: '' },
  subscription        : { type: Boolean, default: false },
  affliteId          : { type: Number, default: 0 },
  levels:[],
  createdAt          : { type: Date, default: Date.now },
  updatedAt          : { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('users', userSchema, 'users');

