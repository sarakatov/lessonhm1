import {addStudent,getAllStudents,getStudentById,updateStudent,deleteStudent} from
'../Constroller/students.js';
import express from "express";
const router=express.Router();

router.get("/",getAllStudents)  
router.get("/:id", getStudentById)  
router.put("/:id", updateStudent)  
router.post("/",addStudent) 
router.delete("/:id",deleteStudent)  

export default router;