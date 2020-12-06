import { createContext, useContext, useEffect, useReducer } from "react";
import { useToasts } from "react-toast-notifications";

import data from "../shoes.json";
import reducer from "./reducer";

const GlobalContext = createContext();

const initialState = {
  data,
  cart: [],
  totalAmount: 0,
  cartItem: 0,

  toastMsg: "",
  toastType: "",
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <GlobalContext.Provider
      value={{ ...state, addToCart, clearCart, remove, increase, decrease }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
