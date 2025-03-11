import { useState } from "react";
import { Form, Button, ListGroup, InputGroup } from "react-bootstrap";

function Todo({ todo, dispatch }) {
    const { id, title, completed } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);

    const toggleComplete = () => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    };

    const startEditing = () => {
        setIsEditing(true);
    };

    const saveEdit = () => {
        dispatch({ type: "EDIT_TODO", payload: { id, title: editText } });
        setIsEditing(false);
    };

    const deleteTodo = () => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    return (
        <li className="flex justify-between items-center p-2 ">
            {isEditing ? (
                <div className="flex w-full gap-2">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 p-2 border rounded"
                    />
                    <button
                        onClick={saveEdit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={toggleComplete}
                        className="h-5 w-5"
                    />
                    <span
                        className={`flex-1 truncate ${completed ? 'line-through text-gray-500' : ''}`}
                    >
                        {title}
                    </span>
                </div>
            )}

            {!isEditing && (
                <div className="flex gap-2">
                    <button
                        onClick={startEditing}
                        className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={deleteTodo}
                        disabled={!completed}
                        className={`px-4 py-1 rounded ${completed
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Delete
                    </button>
                </div>
            )}
        </li>
    );
}

export default Todo
