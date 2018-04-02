var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  nombre : {type: String, required: true},
  numero : String,
  correo : String
});

// UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
