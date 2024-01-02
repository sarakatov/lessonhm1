import mongoose from "mongoose"
export const connection=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/school")
    .then(() => { console.log("connected") })
    .catch(err => { console.log("אא להתחבר");
    process.exit(1);
 })
} 
