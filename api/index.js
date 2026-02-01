const express=require("express");
const mongoose=require("mongoose");
const dotenv = require('dotenv');

dotenv.config()
const MOGO_URL = process.env.MONGO_URL

const app=express()
mongoose.connect(MOGO_URL, {
})
.then((res) => {
console.log('Database connected');
})
.catch((error) => {
console.log(error);
});
app.listen(8800,()=>{
    console.log("Backend Server is Running")
})


