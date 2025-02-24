
function EmployeeListItem({ name, position }) {
    return (
        <div className='employee'>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
}

export default EmployeeListItem;