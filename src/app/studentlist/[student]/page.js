'use client'

import { students } from "../page";
export default function Student({params}){
    console.log(params);
    
const studentData = students.find(
    (student) => student.name.toLowerCase() === params.student.toLowerCase()
);

if(!studentData){
    return <h1>Student not found</h1>
    }

    return(
        <div>
            <h1>student details</h1><br />
            <h2>Student Name: {studentData.name}</h2><br />
            <h2>Student Age: {studentData.age}</h2><br />
            <h2>Student Grade: {studentData.city}</h2><br />
        </div>
    )
}



