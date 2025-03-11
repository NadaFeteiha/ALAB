import './App.css'
import Todo from './components/Todo';
import initialState from './data/data';
import { useReducer, useState } from 'react';
import todoReducer from './reducer/reducer.js';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleClick = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  return (
    <div className='className="max-w-md mx-auto mt-8 px-4'>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );

}

export default App
