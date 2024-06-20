import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const products = [
  {
    id: 100,
    name: "choco sklice milk",
    price: 49,
    description: "400g",
    image: "choco.jpg",
  },
  {
    id: 101,
    name: "jersey cued milk",
    price: 199,
    description: "600g",
    image: "milk.png",
  },
  {
    id: 102,
    name: "heritage health milk",
    price: 149,
    description: "300g",
    image: "milk2.jpg",
  },
  {
    id: 103,
    name: "panner freak",
    price: 24,
    description: "30g",
    image: "paneer.jpg",
  },
];
const initialstate = {
  products,
  cart: [],
  wishlist: {},
};
const reducer = (state = initialstate, action) => {
  // get productid and move that object from product to cart.
  switch (action.type) {
    case "add_cart": {
      const productId = action.payload;
      let selectedItem = null;
      return {
        ...state,
        products: state.products.filter((item) => {
          if (item.id === productId) {
            selectedItem = item;
            selectedItem.quantity = 1;
            return false;
          }
          return true;
        }),
        cart: [...state.cart, selectedItem],
      };
    }
    case "inc_count": {
      return {
        ...state,
        cart: state.cart.map((plus) => {
          if (plus.id === action.payload) {
            plus.quantity++;
          }
          return plus;
        }),
      };
    }
    case "dec-count": {
      state.cart.forEach((p) => {
        if (p.id === action.payload) {
          p.quantity--;
          if (p.quantity === 0) {
            delete p.quantity;
            state.products.push(p);
          }
          return {
            ...state,
          };
        }
      });
    }
    default:
      return state;
  }
};
const store4 = legacy_createStore(reducer, composeWithDevTools());
export default store4;
