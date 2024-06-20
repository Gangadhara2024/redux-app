import React from "react";
import { Products } from "./Products";
import { Provider } from "react-redux";
import store4 from "./store4";
import "../App.css";
import { Cart } from "./Cart";

export const MainShop = () => {
  return (
    <Provider store={store4}>
      <div>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
};
