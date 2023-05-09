import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { remove, totalAmout } from "./cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const totalprice = useSelector((state) => state.carts.prices);
  console.log(totalprice);
  const handelRemove = (productid) => {
    dispatch(remove(productid));
  };
  const totalValue = cart.map((product) => product.price);

  useEffect(() => {
    if (totalValue.length >= 1) {
      const finalPrice = totalValue.reduce((acc, cur) => acc + cur);
      dispatch(totalAmout(finalPrice));
    } else {
      alert("Do you realy want to remove this last item");
      navigate("/");
    }
  }, [cart]);

  return (
    <div className="cart-main">
      <div className="cart-wrapper">
        {cart &&
          cart.map((product, index) => (
            <div className="cart-product" key={index}>
              <img src={product.image} alt={product.title} />
              <p>Price: {product.price}</p>
              <button onClick={() => handelRemove(product.id)}> Remove </button>
            </div>
          ))}
      </div>
      <div className="price-container">
        {cart.map((product, ind) => (
          <div key={ind} className="product-price">
            <p className="price-text">Price:</p>
            <p className="price-text"> {product.price}</p>
          </div>
        ))}
        <p>Total Amout : {totalprice} </p>
      </div>
    </div>
  );
};

export default Cart;
