import React, { useState } from "react";
import "../App.css";

const TodoApp = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState([]);
  const [editData, setEditData] = useState(true);
  const [IsEditItem, setIsEditItem] = useState(null);

  const handelvalue = () => {
    if (name) {
      setValue([...value, name]);
      setName("");
    } else {
      alert("Please enter Todo");
    }
  };
  const handelEdit = () => {
    // setName.push();
    // setEditData(name);
    // setEditItem + name;
    // value.map((elem) => {
    //   if (elem === editItem) {
    //     return { ...elem, name };
    //   }
    //   return elem;
    // });
  };
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelDel = (id) => {
    // const newTodos = [...value];
    // newTodos.filter((index) => index !== id);
    // newTodos.splice(id, 1);
    const updatedValue = value.filter((elem, ind) => ind !== id);
    setValue(updatedValue);
  };
  const handeledit = (id) => {
    let editItem = value.find((elem, ind) => ind === id);
    setName(editItem);
    const index = value.findIndex((todo) => todo === editItem);
    // console.log(value.at(index));
    setIsEditItem(index);
    setEditData(false);
  };
  const handelUpdate = () => {
    setValue(
      value.map((elem, ind) => {
        if (ind === IsEditItem) {
          return name;
        }
        return elem;
      })
    );
    setEditData(true);
    setName("");
  };
  return (
    <div style={{ margin: "100px auto" }}>
      <input
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          border: "0.2px solid black",
        }}
        type="text"
        placeholder="Write your todos here"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {editData ? (
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "10px",
            border: "0.2px solid black",
            marginLeft: "10px",
          }}
          onClick={handelvalue}
        >
          Add
        </button>
      ) : (
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "10px",
            border: "0.2px solid black",
            marginLeft: "10px",
          }}
          onClick={handelUpdate}
        >
          update
        </button>
      )}

      <div>
        {value.map((todo, ind) => (
          <div key={ind} className="todo-wrapper">
            <h1>{todo}</h1>
            <div>
              <button onClick={() => handelDel(ind)}>Delete</button>
              <button onClick={() => handeledit(ind)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
