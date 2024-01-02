import mongoose from "mongoose"
 

const studentSchema=mongoose.Schema({
    name:String,
    mark:Number,
    avg:Number,
})
let studentModel=mongoose.model("class1",studentSchema)
export default studentModel;