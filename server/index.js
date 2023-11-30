const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = requrie('express-session');
const User = require('./models/User');

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:5173'];

mongoose.connect("mongodb://127.0.0.1:27017/pagerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: allowedOrigins}));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.json({ msg: "wrong" });
})

app.get("/data", (req,res) => {
    res.json({ msg: "index" });
})


app.listen(port, (req,res) => {
    console.log(`Server up and running on port ${port}`)
});
