import express from "express";
import { config } from "dotenv";
import studentRouter from './routes/students.js'
import { connection } from "./connect/config.js";
const app=express();
 
connection();
config();
//middelware
app.use(express.json());
app.use('/api/students',studentRouter)
app.use((err,req,res,next)=>{
    let statusCode=res.statusCode||500;
    let message=err.message||"sorry";
    res.status(statusCode).send(message);
})


let port = process.env.PORT || 3500
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})