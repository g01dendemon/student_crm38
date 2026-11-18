import StudentCard from "./StudentCard.jsx";
import { useState } from "react";


function StudentList() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Anna"
        },
        {
            id: 2,
            name: "David"
        }
    ]);

    function addStudent() {
        const newStudent = {
            id: crypto.randomUUID(),
            name: "Sarah"
        };
        setStudents([...students, newStudent]);
    }

    function deleteStudent(id) {
        const newStudents = students.filter(student => student.id !== id);

        setStudents(newStudents);
    }



    if (students.length === 0) {
       return <p>Student List is empty</p>;
    }

    return (
        <div>
            <button onClick={addStudent}>
                Add Student
            </button>

            <div>
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} onDelete={deleteStudent} />
                ))}
            </div>
        </div>
    );


}

export default StudentList;