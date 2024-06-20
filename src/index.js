import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Main2 } from "./basic-redux2/Main2";
import { Main3 } from "./basic-redux3/Main3";
import { Main1 } from "./basic-redux1/Main1";
import { MainShop } from "./shoppingCart/MainShop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainShop />);
