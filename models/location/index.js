const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  coordinates: { type: [Number], index: '2dsphere' }, // [Number] = [x,y]
  type: { type: String, default: 'Location' }
});

module.exports = LocationSchema;
