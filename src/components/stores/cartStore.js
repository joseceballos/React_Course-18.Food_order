import { createWithEqualityFn } from "zustand/traditional";

const initialValues = {
  cart: [],
  isFetchingCart: false,
  errorFetchingCart: "",
};

export const useCartStore = createWithEqualityFn((set, get) => ({
  ...initialValues,

  addCartItem: (itemId) =>
    set((prevState) => {
      const item = prevState.cart.find((item) => item.id === itemId);
      if (item === undefined) {
        return {
          ...prevState,
          cart: [...prevState.cart, { id: itemId, qty: 1 }],
        };
      } else {
        const updatedCart = [...prevState.cart];
        updatedCart.map((item) => {
          if (item.id === itemId) {
            item.qty += 1;
            return item;
          }
        });
        return { ...prevState, cart: updatedCart };
      }
    }),
  removeCartItem: (itemId) =>
    set((prevState) => {
      const item = prevState.cart.find((item) => item.id === itemId);
      let updatedCart = [];
      if (item.qty <= 1) {
        updatedCart = [
          ...prevState.cart.filter((cartItem) => cartItem.id !== itemId),
        ];
      } else {
        updatedCart = [...prevState.cart];
        updatedCart.map((item) => {
          if (item.id === itemId) {
            item.qty -= 1;
            return item;
          }
        });
      }
      return { ...prevState, cart: updatedCart };
    }),
  resetCart: () =>
    set((prevState) => {
      return {
        ...prevState, cart: []
      }
    }),
}));
