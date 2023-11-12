const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Email = require('mongoose-type-email');

const artistSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: Email, required: true, unique: true},
  description: {type: String, required: true},
  flashes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flash'
  }]
}, { 
  timestamps: true 
});

artistSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Artist', artistSchema);
