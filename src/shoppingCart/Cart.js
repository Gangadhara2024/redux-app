import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (productId) => {
    dispatch({ type: "inc_count", payload: productId });
  };
  const decrement = (productId) => {
    dispatch({ type: "dec_count", payload: productId })
  };
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="cart-card">
              <img src={product.image} alt={product.name} />
              <div>
                <b>{product.name} </b>
                <p>{product.description} </p>
                <span>{product.price} </span>
              </div>
              <div className="modifier">
                <button onClick={() => decrement(product.id)}>-</button>
                <span>{product.quantity} </span>
                <button onClick={() => increment(product.id)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
