import dotenv from "dotenv";
dotenv.config();  // this replaces require("dotenv").config()
import express from 'express'
import mongoose from 'mongoose'
import {HoldingsModel} from './models/HoldingsModel.js';
import {PositionsModel} from './models/PositionsModel.js';
import {watchlist , holdings , positions} from '../dashboard/src/data/data.js'
import cors from 'cors'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import UserModel from './models/UsersModel.js';

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

app.post("/signup",async(req,res)=>{
    try{
        const {username , password} = req.body;
        const existingUser = await UserModel.findOne({username : username})
        if(existingUser){
            return res.status(400).json({message : "user already exists!"})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } 
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
})

app.post("/login",async (req,res)=>{
    const {username , password} = req.body;
    const existingUser = await UserModel.findOne({username : username});
    if(!existingUser){
        return res.status(400).json("User does not exist");
    }
    
    const isMatch = await bcrypt.compare(password,existingUser.password)
    if(!isMatch){
        return res.status(400).json("Incorrect Password")
    }

    const token = jwt.sign(
            { id:existingUser._id , username : existingUser.username},
            "mysecretkey",
            {"expiresIn" : "1h"}
    )

    res.cookie("token",token,{
        httpOnly: true, 
        secure: false,  
        maxAge: 3600000 
    })

    res.json({ message: "Login successful" });
})

app.post("/logout", (req, res) => {
  res.clearCookie("token"); // remove cookie
  res.json({ message: "Logged out successfully" });
});

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
    mongoose.connect(url);
    console.log("DB Connected !");
})



