import CartItem from "./CartItem.jsx";
import { useCartFacade } from "../stores/useCartFacade.js";

export default function Cart({ onCloseCart, onOpenCheckout }) {
  const { cartWithDetails, totalPrice, totalUnits, addCartItem, removeCartItem } = useCartFacade();

  console.log(cartWithDetails);
  function handleRemoveCartItem(cartItemId) {
    removeCartItem(cartItemId);
    if(totalUnits <= 1 ){
      onCloseCart();
    }
  }

  return (
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartWithDetails.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onAddQty={addCartItem}
                onRemoveQty={handleRemoveCartItem}
              />
            );
          })}
        </ul>
        <p className="cart-total">${totalPrice}</p>
        <p className="modal-actions">
          <button className="text-button" onClick={onCloseCart}>Close</button>
          <button className="button" onClick={onOpenCheckout}>Go to Checkout</button>
        </p>
      </div>
  );
}
