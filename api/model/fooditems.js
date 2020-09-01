const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema  = new Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inCart: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    hotel: [{
        type: Schema.Types.ObjectId, ref: 'Hotel'
    }]
});



module.exports = mongoose.model('Fooditems', schema);