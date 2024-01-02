import express from "express";
import { config } from "dotenv";
import studentRouter from './routes/students.js'
import { connection } from "./connect/config.js";
const app=express();
 
connection();
config();

app.use(express.json());
app.use('/api/students',studentRouter)



let port = process.env.PORT || 3500
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})