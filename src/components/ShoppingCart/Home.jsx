import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts, add, remove } from "./cartSlice";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  // const [product, setProduct] = useState([]);
  const products = useSelector((state) => state.carts.products);
  const handelAdd = (id) => {
    dispatch(add(id));
  };

  useEffect(() => {
    const handelProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // setProduct(data);
      dispatch(storeProducts(data));
    };
    handelProducts();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="card-wrapper ">
        {products.map((elem, index) => (
          <div className="card" key={elem.id}>
            <img src={elem.image} />
            <h5>{elem.title}</h5>
            <div>
              <p>Price :{elem.price}</p>
              <p>Rating {elem.rating.rate}</p>
            </div>
            <button onClick={() => handelAdd(elem)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
