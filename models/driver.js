const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    text: true,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
