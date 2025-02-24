
function EmployeeListItem({ name, position, imgUrl }) {
    return (
        <div className='employee'>
            <img className="profile-img" src={imgUrl} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </div>
    );
}

export default EmployeeListItem;