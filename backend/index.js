require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port =process.env.port || 8080 ;
const url = process.env.MONGO_URL;

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
    mongoose.connect(url);
    console.log("DB Connected !");
})

