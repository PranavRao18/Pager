const express = require('express');
const passport = require('passport');
const User = require('../models/users');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/register", async(req, res) => {

  try{

    const username = req.body.email;
    const password = req.body.password;
    if(!username){
      return res.json({error: 'Email is required'});
    }
    if(!password){
      return res.json({error: 'Password is required'});
    }

    const exist = await User.findOne({username});
    if(exist) {
      return res.json({
        error: "Email is already in use"
      })
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        const user = User.create({
          username, password: hash
        })
        return res.json(user);
      });
    });
  }
  catch(err){
    console.log(err);
  }

  
});

router.post('/login', async(req, res, next) => {

  const username = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({username});
  if(!user){
    return res.json({error: "No user found"});
  }

  const match = await bcrypt.compare(password, user.password);
  if(match){
    return res.json("Login Successful");
  }
  res.json({error: "Wrong Password"});

});


router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200).json({ message: 'Logout successful' });
});

module.exports = router;