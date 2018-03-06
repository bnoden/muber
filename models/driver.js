const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    text: 1,
    required: 1
  },
  driving: {
    type: Boolean,
    default: 0
  }
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
