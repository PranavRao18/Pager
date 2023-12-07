require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/users');
const Blog = require('./models/blogs');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({ origin: allowedOrigins}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pagerDB');

app.get("/trial", (req,res) => {
    console.log("Trial");
    res.json({aii:'aii'});
})

app.use("/auth", authRoutes);

app.listen(port, (req,res) => {
    console.log(`Server up and running on port ${port}`)
});
