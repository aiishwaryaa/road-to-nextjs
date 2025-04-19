//dynamic routing

import Link from "next/link"

export const students = [
     { name: "john", age: 20, city: "Delhi" },
     { name: "jane", age: 22, city: "Mumbai" },
     { name: "bob", age: 21, city: "Bangalore" },
     { name: "alice", age: 23, city: "Chennai" }
   ]
export default function StudentList(){

    return(
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map((student, index)=>(
                    <li key={index}>
                      <Link href={`/studentlist/${student.name}`}>
                       {student.name}
                      </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}






