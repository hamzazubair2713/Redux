import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../store-redux/actions/counterActions";
import { takeName } from "../store-redux/actions/NameActions";
const Home = () => {
  const [named, setName] = useState("");
  const { counter } = useSelector((state) => state);
  const { name } = useSelector((state) => state);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(incrementCounter(3));
  };
  const minus = () => {
    dispatch(decrementCounter(3));
  };
  const submit = () => {
    dispatch(takeName(named));
  };
  return (
    <div>
      {console.log("staet", name)}
      <div className="Card">
        <h1>Counter : {counter.counter}</h1>
        <div className="Wrapper">
          <img />
          <input
            value={named}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter name"
          />
          <button onClick={submit}>submit</button>
        </div>
        <div className="Card-text">
          {name.name &&
            name.name.map((val, index) => {
              return <span key={index}>{val}</span>;
            })}

          <span>Price: $1000</span>
        </div>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    </div>
  );
};

export default Home;
