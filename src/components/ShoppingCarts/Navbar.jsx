import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.carts.products);
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
      <span>Cart {items && items.length > 0 ? items.length : null}</span>
    </div>
  );
};

export default Navbar;
