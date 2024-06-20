import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
  const products = useSelector((state) => state.products);
  // console.log(products);
  const dispatch = useDispatch();

  const addToCart = (productId) => {
    dispatch({ type: "add_cart", payload: productId });
  };
  return (
    <>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <b>{product.name}</b>
              <p>{product.description} </p>
              <span>{product.price} </span>
              <button onClick={() => addToCart(product.id)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
