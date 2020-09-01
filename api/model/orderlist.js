const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema  = new Schema({
    user: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    hotelLocation: {
        type: String,
        required: true
    },
    ordersList: [{
        productName: String,
        productPrice: Number,
        productCount: Number,
        productTotal: Number
    }],
    orderTotal: {
        type: Number,
        required: true
    },
    savedAddress: [{
        name: String,
        location: String,
        address: String
    }]
});



module.exports = mongoose.model('OrderList', schema);