import StatusBadge from "./StatusBadge.jsx";
function StudentCard({ student }) {

    return (
        <div>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Group: {student.group}</p>
            <StatusBadge isActive={student.isActive} />
        </div>
    );

}

export default StudentCard;