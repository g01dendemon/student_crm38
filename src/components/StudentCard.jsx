import StatusBadge from "./StatusBadge.jsx";
function StudentCard({ student, onDelete }) {



    return (
        <div>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Group: {student.group}</p>
            <StatusBadge isActive={student.isActive} />
            <p>
            <button onClick={() => onDelete(student.id)}>
                Delete
            </button>
            </p>
        </div>
    );

}

export default StudentCard;