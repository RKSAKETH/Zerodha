import dotenv from "dotenv";
dotenv.config();  // this replaces require("dotenv").config()
import express from 'express'
import mongoose from 'mongoose'
import {HoldingsModel} from './models/HoldingsModel.js';
import {watchlist , holdings , positions} from '../dashboard/src/data/data.js'
const app = express();

const port =process.env.PORT || 8080;
const url = process.env.MONGO_URL;

app.get('/addHoldings',async(req,res)=>{
    try {
        await HoldingsModel.insertMany(holdings);
        res.send("Holdings saved to database");
    } 
    catch (error) {
        console.error(error);
        res.status(500).send("Error saving holdings");
  }
})

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
    mongoose.connect(url);
    console.log("DB Connected !");
})



