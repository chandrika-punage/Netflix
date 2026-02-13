import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import userRouter from './routes/users.js'
import movieRouter from './routes/movies.js'
import listRouter from './routes/lists.js'


const app=express()


dotenv.config({ quiet: true });
const mongo_url = process.env.MONGO_URL


app.get('/',(req,resp)=>{
    return resp.status(200).json({"msg":"Application Root Router"})
})

//Middleware
app.use(express.json())


app.use("/api/auth",authRouter)


app.use("/api/users",userRouter)

app.use("/api/movies",movieRouter)

app.use("/api/lists",listRouter)

mongoose.connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });





app.listen(8800,()=>{
    console.log("Backend Server is Running on 8800")
})


