import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { remove } from "./cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.carts.products);
  const dispatch = useDispatch();
  const handelRemove = (id) => {
    console.log("remove id", id);
    dispatch(remove(id));
  };
  let total;
  // if (items.length > 0) {
  //   total = items.reduce(
  //     (accumulator, currentValue) =>
  //       parseInt(accumulator.price) + parseInt(currentValue.price)
  //   );
  // }

  return (
    <div className="cart-main">
      <>
        <div className="cart-wrapper">
          {items?.length > 0 ? (
            <h1>Selected Products</h1>
          ) : (
            <h1>No product Selected</h1>
          )}
          {items &&
            items.map((product, index) => (
              <div className="cart-product">
                <img src={product.image} alt={product.title} />
                <p>Price: {product.price}</p>
                <button onClick={() => handelRemove(product.id)}>
                  {" "}
                  Remove{" "}
                </button>
              </div>
            ))}
        </div>
      </>
      <div>
        {items && items.map((product) => <p>price: {product.price}</p>)}
        {/* <p> Total Bill : {console.log(total)}</p> */}
      </div>
    </div>
  );
};

export default Cart;
