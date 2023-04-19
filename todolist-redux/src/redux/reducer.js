import {
  GETLIST,
  GET_TODO_FAILURE,
  GETTODOREQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_FAILURE,
  DELETE_TODO_REQUEST,
} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GETTODOREQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: [...payload] };
    case GET_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_TODO_REQUEST:
      return { ...state, isLoading: true };
    case POST_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] };
    case POST_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    default:
      return state;
  }
};
