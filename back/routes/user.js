const express = require('express');
const router = express.Router();
const {User} = require('../models')
const passport = require('passport') 


router.post('/register',(req,res)=>{
User.create(req.body).then((user)=>res.send(user))
})


router.post('/login',passport.authenticate('local'), function(req, res, next) {
  /* console.log('req.session : ', req.session )
  console.log('req.cookies: ', req.cookies)
  console.log('req.user: ', req.user)
  console.log('req.isAuthenticated: ', req.isAuthenticated()) */
  console.log("ESTAS LOGGEADO")
 res.status(200).json({user:req.user, isAuthenticated:req.isAuthenticated()})
});


router.get('/salir', (req, res, next) =>{
  if(req.isAuthenticated()){
    req.logOut()
    console.log("ESTAS DESLOGGEADO")
  }
  res.sendStatus(200)
})


module.exports= router