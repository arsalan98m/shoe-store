const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let tempData = state.data.filter((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, totalItem: (cartItem.totalItem += 1) };
        }
      });

      return {
        ...state,
        cart: [...new Set([...state.cart, ...tempData])],
        toastMsg: "Item Added to the Cart",
        toastType: "success",
        isToastOpen: true,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: state.cart
          .map((cartItem) => {
            return { ...cartItem, totalItem: (cartItem.totalItem = 0) };
          })
          .filter((cartItem) => cartItem.totalItem !== 0),
        cartItem: 0,
        totalAmount: 0,
        toastMsg: "Cart is Cleard",
        toastType: "error",
        isToastOpen: true,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload) {
              return { ...cartItem, totalItem: (cartItem.totalItem = 0) };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.id !== action.payload),
        toastMsg: "Item is Removed from the Cart",
        toastType: "error",
        isToastOpen: true,
      };

    case "INCREASE":
      let tempICart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, totalItem: cartItem.totalItem + 1 };
        }

        return cartItem;
      });
      return {
        ...state,
        cart: tempICart,
      };
    case "DECREASE":
      let tempDCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, totalItem: cartItem.totalItem - 1 };
          }

          return cartItem;
        })
        .filter((cartItem) => cartItem.totalItem !== 0);
      return {
        ...state,
        cart: tempDCart,
      };

    case "GET_TOTALS":
      let { totalAmount, cartItem } = state.cart.reduce(
        (cartTotal, product) => {
          const { price, totalItem } = product;
          const itemTotal = price * totalItem;

          cartTotal.totalAmount += itemTotal;
          cartTotal.cartItem += totalItem;
          return cartTotal;
        },
        { totalAmount: 0, cartItem: 0 }
      );
      totalAmount = parseFloat(totalAmount);

      return {
        ...state,
        totalAmount,
        cartItem,
      };

    default:
      return state;
  }
};

export default reducer;
