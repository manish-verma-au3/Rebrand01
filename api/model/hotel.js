const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({}, { strict: false });
const Hotel = mongoose.model('Hotel', HotelSchema, 'hotels');

module.exports = mongoose.model('Hotel', HotelSchema);
