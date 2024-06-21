import { useCartStore } from "./cartStore";
import { shallow } from "zustand/shallow";
import { useMealsFacade } from "./useMealsFacade";
import { getMealsInfo, getTotalPrice, getTotalUnits } from "../../assets/js/utils/cartUtils";

function useCartDerived(cart) {
  const cartWithDetails = getMealsInfo(cart, useMealsFacade().meals);
  const totalPrice = getTotalPrice(cartWithDetails);
  const totalUnits = getTotalUnits(cartWithDetails);

  return {cartWithDetails, totalPrice, totalUnits};
}

export function useCartFacade() {
  const {
    cart,
    isFetchingCart,
    errorFetchingCart,
    addCartItem,
    removeCartItem,
    resetCart,
  } = useCartStore(
    (state) => ({
      cart: state.cart,
      isFetchingCart: state.isFetchingCart,
      errorFetchingCart: state.errorFetchingCart,
      addCartItem: state.addCartItem,
      removeCartItem: state.removeCartItem,
      resetCart: state.resetCart,
    }), shallow
  );

  const { cartWithDetails, totalPrice, totalUnits } = useCartDerived(cart);

  return {
    cart,
    cartWithDetails,
    isFetchingCart,
    errorFetchingCart,
    addCartItem,
    removeCartItem,
    resetCart,
    totalPrice,
    totalUnits,
  };
}