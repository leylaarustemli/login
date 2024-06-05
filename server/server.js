const express = require('express')
const mongoose=require("mongoose")

const userModel=require("./models/UserModel")
const cors=require("cors")
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
require('dotenv').config()

app.post("/register",(req,res)=>{
    userModel.create({...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    userModel.findOne({email,password})
})


mongoose.connect(process.env.CONNECTION_STRING)
  .then((res) => console.log('Connected!'));


app.listen(process.env.PORT, (req,res) => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

   
