import mongoose from 'mongoose';
import studentModel from '../models/students.js';

const getAllStudents=async(req,res)=>{
    let {search}=req.query;
    let condition=new RegExp(`${search}`)
    let filter={};
    let page=req.query.page||1;
    let perPage=req.query.perPage||40;
    try {
        if(search)
            filter.name=condition
        let allStudents = await studentModel.find(filter).skip(page*(perPage-1)).limit(perPage)
        res.json(allStudents)
    }
    catch (er) {
        res.status(400).send("sorry" + er.message)
    }
}
const getStudentById=async(req,res)=>{
    try {
        let id = req.params.id
        let studentNum = await studentModel.findById(id)
        res.json(studentNum)
    }
    catch (er) {
        res.status(400).send("sorry" + er.message)
    }
 }
 const deleteStudent=async(req,res)=>{
    try{
        let id=req.params.id
        await studentModel.findByIdAndDelete(id)
        res.send(`delete student num ${id}`);
        }
        catch{
            res.status(400).send("sorry i dont" + er.message)
        } }
 const addStudent=async (req,res)=>{
    try{
        let {name,mark,avg}=req.body
        let newStudent=new studentModel({name,mark,avg})
        await newStudent.save();
        res.json(newStudent);
        }
        catch{
            res.status(400).send("sorry" + er.message)
        }
 }
 const updateStudent=async(req,res)=>{
    let id = req.params.id
    try {
        if (!id)
            res.send("לא נמצא כזה תלמיד")
        let s = await studentModel.findById(id)
        if (!s) 
            res.send("לא נמצא כזה תלמיד")
        await studentModel.findByIdAndUpdate(id,req.body)
        let student=studentModel.findById(id)
        res.json(student)
    }
    catch (er) {
        res.status(400).send("sorry" + er.message)
    }
 }

 export {addStudent,getAllStudents,getStudentById,deleteStudent,updateStudent}