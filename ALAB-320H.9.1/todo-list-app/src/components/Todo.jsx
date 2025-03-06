
function Todo({ todo , dispatch }) {

    const { id, title, completed } = todo;

    return (
        <div style={styles}>
            <input type="checkbox" checked={completed} />
            <h3>{title}</h3>

            <button>Edit</button>
            <button>Delete</button>
        </div>
    );

}

const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px #ccc",
    width: "50%",
    backgroundColor: "#f4f4f4"
}

export default Todo
