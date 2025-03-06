import './App.css'
import Todo from './components/Todo';
import initialState from './data/data';
import { useReducer, useState } from 'react';


//Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: state.length + 1,
        title: action.payload,
        completed: false
      }
      return [newTodo, ...state]
    }
    default:
      return state
  }
}

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleClick = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>
      {
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      }
    </div>
  );

}

export default App
