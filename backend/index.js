import dotenv from "dotenv";
dotenv.config();  // this replaces require("dotenv").config()
import express from 'express'
import mongoose from 'mongoose'
import {HoldingsModel} from './models/HoldingsModel.js';
import {PositionsModel} from './models/PositionsModel.js';
import {watchlist , holdings , positions} from '../dashboard/src/data/data.js'
import cors from 'cors'

const port =process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors())
app.use(express.json())


// app.get('/addHoldings',async(req,res)=>{
//     try {
//         await HoldingsModel.insertMany(holdings);
//         HoldingsModel.save();
//         res.send("Holdings saved to database");
//     } 
//     catch (error) {
//         console.error(error);
//         res.status(500).send("Error saving holdings");
//   }
// })

// app.get('/addPositions',async(req,res)=>{
//     try{
//         await PositionsModel.insertMany(positions)
//         res.send('Positions saved to database')
//     }
//     catch(error){
//         console.error(error);
//         res.status(500).send("Error saving positions")
//     }
// })

app.get("/allHoldings",async (req,res)=>{
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings)
})

app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({})
    res.json(allPositions)
})

app.get('/allPositions',async(req,res)=>{
    let allPositions = await PositionsModel.find({})
    res.json(allPositions)
})

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
    mongoose.connect(url);
    console.log("DB Connected !");
})



