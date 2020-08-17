var express = require('express')
var volleyball= require('volleyball')
var path = require('path');
var db= require('./config/db')
var routes=require('./routes')
var {User}= require('./models')

const cookieParser = require('cookie-parser');
const passport = require('passport')
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;

var app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser());
app.use(volleyball)
app.use(express.static(path.join(__dirname , '/public')))

app.use(session({ secret: "omdb" }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  {usernameField:'email', passwordField:'password'},
      function(inputEmail, inputPassword, done) {
        User.findOne({ where:{ email: inputEmail }}).
        then((user)=>{
          if (!user) {
            return done( null, false, {message:"Email incorrecto !"})
          }
          if(!user.validPassword(inputPassword)){
            return done( null,false, {message:"Contraseña incorrecta !"})
          }
          return done(null,user)
        })
        .catch(done)
      }
));



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user) )
})


app.use('/api', routes)


db.sync({force:false})
.then(()=>{
    console.log('Conectado a la base de datos')
    app.listen(1337, console.log("ESCUCHANDO PUERTO 1337"))
}).catch((err)=> console.log(err))
