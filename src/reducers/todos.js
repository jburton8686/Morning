import { compose } from "redux";
import * as types from "../ActionTypes";
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];
    case types.COMPLETE_TODO:
      const todoIndex = state.map(x => x.id).indexOf(action.id);
      const completedTodo = state[todoIndex];
      return [
        ...state.slice(0, todoIndex),
        { ...completedTodo, completed: !completedTodo.completed },
        ...state.slice(todoIndex + 1, state.length)
      ];

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case types.EDIT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      );
    default:
      return state;
  }
}
