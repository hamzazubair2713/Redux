import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/todoApp/Actions/todoAction";
const Todo = () => {
  const [input, setInput] = useState("");
  const todoitems = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const editTodo = (id) => {
    const index = todoitems.find((value, index) => value.id == id);
    console.log("id", id, index.todo);
    setInput(index.todo);
  };
  //   console.log(todoitems);
  return todoitems.map((elem) => (
    <div key={elem.id}>
      {input}
      <div>
        <input
          type="checkbox"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          checked={elem.completed}
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          checked={elem.completed}
        />
        <p>{elem.todo}</p>
      </div>
      <div>
        <button onClick={() => editTodo(elem.id)}>edit</button>
        <button onClick={() => dispatch(removeTodo(elem.id))}>Delet</button>
      </div>
    </div>
  ));
};

export default Todo;
