var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../model/User');

/* signup API. */
router.post('/register', async function(req, res, next) {

   //check if user already exist or not 
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist){
      return res.status(400).send('Email already exists');
  }

  //HashPassword
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(req.body.password, salt)

  //create new user
  const user = new User({
      email: req.body.email,
      password: hasedPassword
  });
  try{
      const savedUser = await user.save();
      res.send(savedUser);
  }catch (err) {
        res.status(400).send('Invalid Email or Password');
  }
});


/* login API. */
router.post('/login', async function(req, res){

  if(req.body.email == null || req.body.password == null){
    res.send('please Enter valid Details!')
  }

  //check if email exist  
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email or password is incorrect!');
  
  //validate
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(400).send('Invalid Email or Password')

  //create n assign a token
  const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET)
  res.header('auth-token', token)
  res.send('Logged In!')
})

module.exports = router;