var express = require('express');
var router = express.Router();
var Hotel =  require('../model/hotel');
var Food = require('../model/fooditems');
var OrderList = require('../model/orderlist');


/*fetch hotel API. */
router.get('/hotelapi', async function(req, res, next) {
   //create new user
   Hotel.find()
  .then(hotels => {
      res.send(hotels)
  }).catch(err => {
      res.status(500).send("some error occured")
  })
 });

 //Post orderList 
router.post('/orderlist', async function(req, res, next){
    const orderlist = new OrderList({
        hotelName: req.body.hotelName,
        hotelLocation: req.body.hotelLocation,
        ordersList: req.body.ordersList,
        orderTotal: req.body.orderTotal,
        savedAddress: req.body.savedAddress
    });
    try {
        const savedList = await orderlist.save();
        res.send(savedList);
    } catch (err){
        res.status(400).send(err);
    }
})


 
 /* food API. */


module.exports = router;