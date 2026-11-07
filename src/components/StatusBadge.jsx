function StatusBadge({ isActive }) {

    return (
        <span>
            {isActive ? "Active" : "On Pause"}
        </span>
    );

}

export default StatusBadge;