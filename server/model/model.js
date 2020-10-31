const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const users = require("../schema/user-model");
const referal = require("../schema/referal-model");
const transaction = require("../schema/transaction-model");
const transaction_status = require("../schema/transaction_status-model");
const daily_income = require("../schema/daily_income-model");

module.exports = {
  users:users,
  referal:referal,
  transaction:transaction,
  transaction_status:transaction_status,
  daily_income:daily_income
};
