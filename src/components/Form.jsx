import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoApp/Actions/todoAction";

const Form = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.todoReducer);
  console.log(editData);

  const handelSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">Add Todo's</label>
      <div>
        <input
          type="text"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
