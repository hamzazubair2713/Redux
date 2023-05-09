import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.carts.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <span>logo</span>
      <div
        style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <span>Cart {cart.length} </span>
    </div>
  );
};

export default Navbar;
