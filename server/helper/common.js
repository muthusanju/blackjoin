const crypto = require('crypto');
var password ="tron1njmi876aszx";

let encrypt = exports.encrypt = (data) => {
  var cipher = crypto.createCipher('aes-256-ecb', password);
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

let decrypt = exports.decrypt = (data) => {
  var cipher = crypto.createDecipher('aes-256-ecb', password);
  return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
}