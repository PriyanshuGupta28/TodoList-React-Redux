import {
  GET_TODO_FAILURE,
  GETTODOREQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_FAILURE,
  DELETE_TODO_REQUEST,
} from "./actionTypes";

export const todoRequestAction = () => {
  return { type: GETTODOREQUEST };
};
export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
export const todoFailureAction = () => {
  return { type: GET_TODO_FAILURE };
};

export const postRequestAction = () => {
  return { type: POST_TODO_REQUEST };
};

export const postSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const postFailureAction = () => {
  return { type: POST_TODO_FAILURE };
};

export const deleteAction = (payload) => {
  return { type: DELETE_TODO_REQUEST, payload };
};
