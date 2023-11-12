const mongoose = require('mongoose');

const flashSchema = new mongoose.Schema({
  idArtist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  categories: [{
    type: String,
    required: true
  }],
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  limitDate: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Flash', flashSchema);