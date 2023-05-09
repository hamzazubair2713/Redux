import React, { useState, useEffect } from "react";
import { add } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };

    fetchProducts();
  }, []);
  const dispatch = useDispatch();
  const handelAdd = (elem) => {
    dispatch(add(elem));
    // console.log(elem);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="card-wrapper ">
        {product.map((elem) => (
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
