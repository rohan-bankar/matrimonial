const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/matrimonial");

const express = require("express");
const app = express();

// for user routs
const userRoute = require('./routes/userRoute')
app.use('/',userRoute.user_route)

app.listen(3000,function(){
    console.log("server is running");
});

