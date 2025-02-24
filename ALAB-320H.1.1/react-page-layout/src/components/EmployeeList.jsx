import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {

    const items = [];

    employees.forEach(employeeItem => {
        items.push(
            <EmployeeListItem name={employeeItem.name} position={employeeItem.position} />
        );
    });

    return (
        <div className='employee-list'> {items}</div>
    );
}


export default EmployeeList;
