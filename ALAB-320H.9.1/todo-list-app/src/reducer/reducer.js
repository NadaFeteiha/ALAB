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

        case 'TOGGLE_COMPLETE': {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        }

        case 'EDIT_TODO': {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title }
                }
                return todo
            })
        }

        case 'DELETE_TODO': {
            return state.filter(todo => todo.id !== action.payload)
        }

        default:
            return state
    }
}

export default todoReducer;