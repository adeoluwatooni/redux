// reducer.js
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TASK } from './actions';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.payload],
        };
        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            ),
        };
        case EDIT_TODO:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload.id
                ? { ...todo, description: action.payload.description }
                : todo
            ),
        };
        case DELETE_TASK:
            // Handle delete task action
            const updatedTasks = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: updatedTasks
            };
        default:
        return state;
    }
};

export default reducer;
