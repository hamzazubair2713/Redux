import React from "react";
import "../../src/App.css";
import item from "../assets/user.jpg";

const Practice = () => {
  return (
    <div>
      cart Item :0<h1>hello</h1>
      <div className="Card">
        <div className="img_wrapper">
          <img src={item} alt="" />
        </div>
        <div className="card-text">
          <span>Amount</span>
          <span>Product</span>
        </div>
        <button>add To cart</button>
      </div>
    </div>
  );
};

export default Practice;
