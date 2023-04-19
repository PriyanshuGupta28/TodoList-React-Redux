import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  postFailureAction,
  postRequestAction,
  postSuccessAction,
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/action";
import Todoinput from "./Todoinput";
import {
  DELETE_TODO_REQUEST,
  GETLIST,
  GETTODOREQUEST,
} from "../redux/actionTypes";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos);

  const getData = () => {
    dispatch(todoRequestAction());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(todoSuccessAction(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(todoFailureAction());
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      completed: false,
    };
    dispatch(postRequestAction());
    axios
      .post("http://localhost:8080/todos", newTodo)
      .then((res) => {
        dispatch(postSuccessAction(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(postFailureAction());
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todos${id}`);
    dispatch(deleteAction(id));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <Todoinput addTodo={handleAddTodo} />
      {todos.length > 0 &&
        todos.map((e) => {
          return (
            <div key={e.id}>
              <div>
                <h3>Title:- {e.title}</h3>
                <h5>Status:-{e.completed ? "completed" : "Pending"}</h5>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
