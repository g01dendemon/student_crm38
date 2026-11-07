import StudentCard from "./StudentCard.jsx";
function StudentList({ students }) {
    if (students.length === 0) {
        return <p>Student List is empty</p>;
    }

    return (
        <div>
            {students.map((student) => (
                <StudentCard key={student.id} student={student} />
            ))}
        </div>
    );
}

export default StudentList;